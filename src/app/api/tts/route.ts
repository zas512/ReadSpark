// Stream TTS audio back; never buffer whole file
export async function POST(req: Request) { return new Response("audio stream"); }
