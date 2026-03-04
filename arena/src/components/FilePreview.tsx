"use client";

import ReactMarkdown from "react-markdown";

interface FilePreviewProps {
  name: string;
  content: string;   // markdown text OR blob URL for PDF
  onClose: () => void;
}

export default function FilePreview({ name, content, onClose }: FilePreviewProps) {
  const isPdf = name.toLowerCase().endsWith(".pdf");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-6xl h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 shrink-0">
          <span className="text-sm font-mono text-gray-300 truncate">{name.replace(/^\d+_/, "")}</span>
          <button onClick={onClose} className="text-gray-500 hover:text-white text-lg leading-none">
            ✕
          </button>
        </div>

        {isPdf ? (
          <embed src={content} type="application/pdf" className="flex-1 w-full h-full rounded-b-xl" />
        ) : (
          <div className="overflow-y-auto p-6 prose prose-invert prose-sm max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
