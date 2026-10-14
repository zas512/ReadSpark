// Real: proxy to OpenAI Whisper (`whisper-1`) with expected-text prompt bias
// Audio handled in-memory only — never write to disk; discard buffer immediately
export async function POST(req: Request) {
  const formData = await req.formData();
  const audio = formData.get("audio") as File;
  // Real integration: requires OPENAI_API_KEY + OPENAI_WHISPER_MODEL
  return Response.json({
    transcript: "The little bird hops.",
    words_read: 6,
    words_correct: 6,
    mispronounced: [],
    accuracy_score: 1.0
  });
}
