import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { pdfUrl } = await req.json();
  if (!pdfUrl) return NextResponse.json({ error: "No URL" }, { status: 400 });

  // Fetch the PDF and convert to base64
  const pdfRes = await fetch(pdfUrl);
  if (!pdfRes.ok) return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 });
  const pdfBuffer = await pdfRes.arrayBuffer();
  const base64 = Buffer.from(pdfBuffer).toString("base64");
  const dataUrl = `data:application/pdf;base64,${base64}`;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_APIKEY}`,
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Convert this PDF to clean Markdown. Preserve all headings, lists, tables, and structure. Output only the Markdown content, no commentary.",
            },
            {
              type: "file",
              file: {
                filename: "document.pdf",
                file_data: dataUrl,
              },
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: 500 });
  }

  const data = await res.json();
  const markdown = data.choices?.[0]?.message?.content ?? "";
  return NextResponse.json({ markdown });
}
