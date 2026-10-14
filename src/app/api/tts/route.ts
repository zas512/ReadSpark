// In-memory only; proxy to OpenAI TTS (`gpt-4o-mini-tts`); stream back to client
export async function POST(req: Request) {
  const { feedbackText } = await req.json();
  // Real integration: requires OPENAI_API_KEY + OPENAI_TTS_MODEL
  return new Response(JSON.stringify({ audioUrl: "/tts-stream", text: feedbackText }), {
    headers: { "Content-Type": "application/json" }
  });
}
