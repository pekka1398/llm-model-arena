"use client";

import { useRef, useEffect, useState } from "react";

export const MODELS = [
  { id: "anthropic/claude-sonnet-4-5", label: "Claude Sonnet 4.5" },
  { id: "openai/gpt-4o", label: "GPT-4o" },
  { id: "google/gemini-2.0-flash-001", label: "Gemini 2.0 Flash" },
  { id: "meta-llama/llama-4-maverick", label: "Llama 4 Maverick" },
  { id: "anthropic/claude-opus-4-5", label: "Claude Opus 4.5" },
  { id: "openai/gpt-4o-mini", label: "GPT-4o Mini" },
  { id: "google/gemini-2.5-pro-preview-03-25", label: "Gemini 2.5 Pro" },
  { id: "deepseek/deepseek-r1", label: "DeepSeek R1" },
];

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  usage?: Usage;
}

interface ModelPanelProps {
  panelId: number;
  selectedModel: string;
  onModelChange: (panelId: number, model: string) => void;
  pendingPrompt: string | null;
  onPromptConsumed: (panelId: number) => void;
  withdrawTrigger: number;
}

const USAGE_MARKER = "\x00USAGE:";

export default function ModelPanel({
  panelId,
  selectedModel,
  onModelChange,
  pendingPrompt,
  onPromptConsumed,
  withdrawTrigger,
}: ModelPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevWithdrawTrigger = useRef(0);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!pendingPrompt) return;
    sendMessage(pendingPrompt);
    onPromptConsumed(panelId);
  }, [pendingPrompt]);

  useEffect(() => {
    if (withdrawTrigger === prevWithdrawTrigger.current) return;
    prevWithdrawTrigger.current = withdrawTrigger;
    setMessages((prev) => {
      let end = prev.length;
      if (end > 0 && prev[end - 1].role === "assistant") end--;
      if (end > 0 && prev[end - 1].role === "user") end--;
      return prev.slice(0, end);
    });
  }, [withdrawTrigger]);

  async function sendMessage(prompt: string) {
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: prompt },
    ];
    setMessages(newMessages);
    setStreaming(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages, model: selectedModel }),
    });

    if (!res.body) return;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistantText = "";

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });

      const markerIdx = chunk.indexOf(USAGE_MARKER);
      let parsedUsage: Usage | undefined;
      if (markerIdx !== -1) {
        assistantText += chunk.slice(0, markerIdx);
        try {
          const raw = JSON.parse(chunk.slice(markerIdx + USAGE_MARKER.length));
          parsedUsage = { prompt_tokens: raw.prompt_tokens, completion_tokens: raw.completion_tokens };
        } catch {}
      } else {
        assistantText += chunk;
      }

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: assistantText,
          ...(parsedUsage ? { usage: parsedUsage } : {}),
        };
        return updated;
      });
    }

    setStreaming(false);
  }

  const modelLabel =
    MODELS.find((m) => m.id === selectedModel)?.label ?? selectedModel;

  return (
    <div className="flex flex-col h-full border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono">#{panelId + 1}</span>
        <select
          value={selectedModel}
          onChange={(e) => onModelChange(panelId, e.target.value)}
          className="flex-1 bg-gray-700 text-white text-xs rounded px-2 py-1 border border-gray-600 focus:outline-none focus:border-blue-500"
        >
          {MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
        {streaming && (
          <span className="text-xs text-blue-400 animate-pulse">●</span>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
        {messages.length === 0 && (
          <p className="text-gray-600 text-center mt-8 text-xs">
            {modelLabel} ready
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.role === "user"
                ? "text-blue-300 bg-blue-950/30"
                : "text-gray-100 bg-gray-800/50"
            } rounded p-2 whitespace-pre-wrap`}
          >
            <span className="text-xs font-bold opacity-60 block mb-1">
              {msg.role === "user" ? "You" : modelLabel}
            </span>
            {msg.content}
            {msg.role === "assistant" && msg.usage && (
              <div className="mt-2 pt-1.5 border-t border-gray-700 flex gap-3 text-xs text-gray-500 font-mono">
                <span>↑ {msg.usage.prompt_tokens} prompt</span>
                <span>↓ {msg.usage.completion_tokens} completion</span>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

    </div>
  );
}
