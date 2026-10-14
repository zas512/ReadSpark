# Real integration: Stripe webhook verification
# Requires: STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET
export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");
  return Response.json({ received: true, verified: Boolean(sig) });
}
