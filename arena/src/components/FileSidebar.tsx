"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import FilePreview from "./FilePreview";

interface FileItem {
  name: string;
  id: string;
  created_at: string;
  metadata: { size: number; mimetype: string };
}

interface FileSidebarProps {
  userId: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export default function FileSidebar({ userId }: FileSidebarProps) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [converting, setConverting] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ name: string; content: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    const { data } = await supabase.storage
      .from("files")
      .list(userId, { sortBy: { column: "created_at", order: "desc" } });
    if (data) setFiles(data as FileItem[]);
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `${userId}/${Date.now()}_${file.name}`;
    await supabase.storage.from("files").upload(path, file);
    setUploading(false);
    e.target.value = "";
    loadFiles();
  }

  async function handleDelete(name: string) {
    await supabase.storage.from("files").remove([`${userId}/${name}`]);
    loadFiles();
  }

  async function handleConvert(name: string) {
    setConverting(name);
    try {
      // Get a signed URL (valid 60s) for OpenRouter to fetch
      const { data: signedData } = await supabase.storage
        .from("files")
        .createSignedUrl(`${userId}/${name}`, 60);

      if (!signedData?.signedUrl) throw new Error("Could not get signed URL");

      const res = await fetch("/api/convert-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfUrl: signedData.signedUrl }),
      });

      const { markdown, error } = await res.json();
      if (error) throw new Error(error);

      // Save markdown as .md file next to the original
      const mdName = name.replace(/\.pdf$/i, ".md");
      const mdPath = `${userId}/${mdName}`;
      const blob = new Blob([markdown], { type: "text/markdown" });
      await supabase.storage.from("files").upload(mdPath, blob, { upsert: true });
      loadFiles();
    } catch (err) {
      console.error("Convert failed:", err);
    } finally {
      setConverting(null);
    }
  }

  async function handlePreview(name: string) {
    const { data } = await supabase.storage
      .from("files")
      .download(`${userId}/${name}`);
    if (!data) return;
    if (name.toLowerCase().endsWith(".pdf")) {
      const url = URL.createObjectURL(data);
      setPreview({ name, content: url });
    } else {
      const text = await data.text();
      setPreview({ name, content: text });
    }
  }

  const displayName = (name: string) => name.replace(/^\d+_/, "");
  const isPdf = (name: string) => name.toLowerCase().endsWith(".pdf");
  const isMd = (name: string) => name.toLowerCase().endsWith(".md");

  return (
    <>
    {preview && (
      <FilePreview
        name={preview.name}
        content={preview.content}
        onClose={() => setPreview(null)}
      />
    )}
    <div className="w-52 flex flex-col bg-gray-900 border-r border-gray-800 shrink-0">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Files
        </span>
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-500 rounded disabled:opacity-50 transition-colors"
        >
          {uploading ? "..." : "+ Upload"}
        </button>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {files.length === 0 && (
          <p className="text-xs text-gray-600 text-center mt-6">
            No files yet
          </p>
        )}
        {files.map((f) => (
          <div
            key={f.id}
            className="flex items-center gap-1 px-2 py-1.5 rounded hover:bg-gray-800 group"
          >
            <div
              className="flex-1 min-w-0 cursor-pointer"
              onClick={() => (isMd(f.name) || isPdf(f.name)) && handlePreview(f.name)}
            >
              <p className={`text-xs truncate ${isMd(f.name) ? "text-green-400" : "text-gray-300"}`}>{displayName(f.name)}</p>
              {f.metadata?.size && (
                <p className="text-xs text-gray-600">{formatSize(f.metadata.size)}</p>
              )}
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 shrink-0">
              {isPdf(f.name) && (
                <button
                  onClick={() => handleConvert(f.name)}
                  disabled={converting === f.name}
                  className="text-yellow-500 hover:text-yellow-300 text-xs disabled:opacity-50"
                  title="Convert to Markdown"
                >
                  {converting === f.name ? "…" : "MD"}
                </button>
              )}
              <button
                onClick={() => handleDelete(f.name)}
                className="text-gray-600 hover:text-red-400 text-xs"
                title="Delete"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
