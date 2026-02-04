import { runRAGPipeline } from "@/lib/rag/pipeline";

// Force dynamic to skip static page data collection during build
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { query, userId } = body;

    if (!query) {
      return new Response(JSON.stringify({ error: "Missing 'query'." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const sendToken = (token) => {
          const data = `data: ${JSON.stringify({ token })}\n\n`;
          controller.enqueue(encoder.encode(data));
        };

        try {
          await runRAGPipeline(query, userId, sendToken);
          controller.enqueue(encoder.encode("event: done\ndata: {}\n\n"));
        } catch (err) {
          console.error("RAG pipeline error:", err);
          controller.enqueue(encoder.encode("event: error\ndata: {}\n\n"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Request parsing error:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
