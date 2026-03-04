"use client";

import { useState, useRef, useEffect } from "react";
import ModelPanel, { MODELS } from "./ModelPanel";
import FileSidebar from "./FileSidebar";
import { createClient } from "@/lib/supabase/client";

const DEFAULT_MODELS = [
  "anthropic/claude-sonnet-4-5",
  "openai/gpt-4o",
  "google/gemini-2.0-flash-001",
  "meta-llama/llama-4-maverick",
];

export default function Arena() {
  const [userId, setUserId] = useState<string | null>(null);
  const [panelCount, setPanelCount] = useState(4);
  const [selectedModels, setSelectedModels] = useState<string[]>(DEFAULT_MODELS);
  const [input, setInput] = useState("");
  const [pendingPrompts, setPendingPrompts] = useState<(string | null)[]>(
    Array(4).fill(null)
  );
  const [withdrawTrigger, setWithdrawTrigger] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleModelChange(panelId: number, model: string) {
    setSelectedModels((prev) => {
      const updated = [...prev];
      updated[panelId] = model;
      return updated;
    });
  }

  function handleSend() {
    const prompt = input.trim();
    if (!prompt) return;
    setPendingPrompts(Array(panelCount).fill(prompt));
    setInput("");
    textareaRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleWithdraw() {
    setWithdrawTrigger((n) => n + 1);
  }

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserId(data.user.id);
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  function handlePromptConsumed(panelId: number) {
    setPendingPrompts((prev) => {
      const updated = [...prev];
      updated[panelId] = null;
      return updated;
    });
  }

  function addPanel() {
    if (panelCount >= 4) return;
    const next = panelCount;
    setSelectedModels((prev) => {
      const updated = [...prev];
      updated[next] = DEFAULT_MODELS[next] ?? MODELS[next % MODELS.length].id;
      return updated;
    });
    setPendingPrompts((prev) => {
      const updated = [...prev];
      updated[next] = null;
      return updated;
    });
    setPanelCount(next + 1);
  }

  function removePanel() {
    if (panelCount <= 1) return;
    setPanelCount((n) => n - 1);
  }

  const gridClass =
    panelCount === 1
      ? "grid-cols-1"
      : panelCount === 2
      ? "grid-cols-2"
      : panelCount === 3
      ? "grid-cols-3"
      : "grid-cols-2";

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
        <h1 className="text-lg font-bold tracking-tight">
          ⚔️ Arena
          <span className="text-xs text-gray-500 font-normal ml-2">
            multi-model
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={removePanel}
            disabled={panelCount <= 1}
            className="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-30"
          >
            − panel
          </button>
          <span className="text-xs text-gray-400">{panelCount} / 4</span>
          <button
            onClick={addPanel}
            disabled={panelCount >= 4}
            className="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-30"
          >
            + panel
          </button>
          <button
            onClick={handleLogout}
            className="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600 text-gray-300"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {userId && <FileSidebar userId={userId} />}

      {/* Panels */}
      <div className={`flex-1 grid ${gridClass} gap-2 p-2 overflow-hidden`}>
        {Array.from({ length: panelCount }).map((_, i) => (
          <ModelPanel
            key={i}
            panelId={i}
            selectedModel={selectedModels[i] ?? MODELS[i % MODELS.length].id}
            onModelChange={handleModelChange}
            pendingPrompt={pendingPrompts[i]}
            onPromptConsumed={handlePromptConsumed}
            withdrawTrigger={withdrawTrigger}
          />
        ))}
      </div>
      </div>

      {/* Input bar */}
      <div className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          placeholder="Ask all models... (Ctrl+Enter to send)"
          className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 resize-none border border-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-600"
        />
        <button
          onClick={handleWithdraw}
          className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg text-sm font-semibold transition-colors"
          title="Withdraw last exchange from all panels"
        >
          Withdraw
        </button>
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-30 rounded-lg text-sm font-semibold transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
