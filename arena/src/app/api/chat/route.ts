import { OpenAI } from "openai";
import { NextRequest } from "next/server";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_APIKEY,
});

export async function POST(req: NextRequest) {
  const { messages, model } = await req.json();

  const stream = await client.chat.completions.create({
    model,
    messages,
    stream: true,
    stream_options: { include_usage: true },
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? "";
        if (text) controller.enqueue(encoder.encode(text));

        if (chunk.usage) {
          const marker = `\x00USAGE:${JSON.stringify(chunk.usage)}`;
          controller.enqueue(encoder.encode(marker));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
