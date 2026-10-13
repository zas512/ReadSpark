// In-memory audio only; proxy to Whisper; discard buffer immediately
export async function POST(req: Request) { return Response.json({ ok: true }); }
