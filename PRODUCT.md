# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, React 19, Server Components) + TypeScript + Tailwind CSS v4 + shadcn/ui + Supabase (PostgreSQL + Auth + RLS) + OpenAI Whisper + OpenAI TTS (`gpt-4o-mini-tts`) + OpenAI GPT-4o-mini (Structured Outputs) + Stripe (Subscriptions) + Sentry

## Users

- **Primary buyers / consent providers:** Parents of children ages 5–8
- **Active users:** Children ages 5–8 practicing reading aloud
- **Dashboard users:** Parents viewing progress, streaks, and session metrics

## Product Purpose

ReadSpark helps children ages 5 to 8 practice reading aloud in short, focused sessions. It uses speech-to-text (Whisper) and structured LLM grading to evaluate reading fluency and phonics, provides encouraging TTS audio feedback, and tracks progress for parents — all within a COPPA-safe, privacy-first, parent-controlled system.

## Positioning

A child-first reading coach, not a generic ed-tech platform: audio is processed in-memory with zero retention settings, every account ties back to a parent identity, and the child's interface is a single focused interaction — no links, no complex navigation, just reading and feedback.

## Operating Context

- Parent completes verifiable consent flow before any child session
- Child opens the minimal reading interface, allows microphone access, and reads a short passage aloud
- Browser audio is captured and sent to the backend **in memory only** (no filesystem writes)
- Backend proxies audio to OpenAI Whisper for transcription (with expected-text prompt bias)
- GPT-4o-mini grades the transcript against the expected passage using Structured Outputs
- TTS streams encouraging feedback audio back to the child (1–2 sentences max)
- Session metrics (duration, words read, accuracy score) are saved to Supabase
- Parent dashboard shows streaks, weekly summaries, and progress tracking
- Session hard cap: 10 minutes
- Stripe handles subscriptions and billing; webhooks verified

## Capabilities and Constraints

- Voice-first reading session for ages 5–8
- Whisper transcription with expected-text prompt bias for accuracy
- Structured grading with `accuracy_score`, `words_correct`, `words_missed`, `mispronounced`
- TTS audio streamed back to the client (streaming, not buffered)
- Session hard cap at 10 minutes
- Zero disk writes for audio; all processing in memory
- Zero-retention settings for OpenAI and Supabase where applicable
- COPPA-safe: no child email, no exact birth date; all accounts tie to parent identity
- Row Level Security (RLS) on every table — parents see only their own children's data
- Account deletion cascades and removes all child records
- Cross-browser compatibility: iOS Safari (user-gesture-required for mic, WebAudio resampling, MIME fallbacks) + Chrome
- Stripe webhooks handled with signature verification

## Brand Commitments

- Name: ReadSpark
- Voice: Friendly, calm, and encouraging — like a reading coach for young children
- Child interface: highly visual, large typography, no distracting links
- Parent experience: clean, minimal, trust-first
- Privacy: explicit parent consent, no child PII, full cascade deletion

## Evidence on Hand

- `read-spark/ARCHITECTURE.md` — full spec
- `read-spark/src/app/page.tsx` — **default Next.js template** (not yet built)
- `read-spark/src/app/layout.tsx` — default metadata (`Create Next App`)
- `read-spark/src/app/child/read/` — empty directory
- `read-spark/src/app/parent/consent/` and `dashboard/` — consent flow present, dashboard stub
- `read-spark/src/app/api/consent/route.ts`, `/grade-reading/route.ts`, `/speech-to-text/route.ts`, `/tts/route.ts`, `/stripe/webhook/route.ts` — API routes exist
- `.env.local`, `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- `supabase/` directory present
- No design system tokens or visual reference artifacts

**Critical absence:** The child-facing reading interface and parent dashboard are not yet implemented; the current page is the default Next.js template.

## Product Principles

1. The child's attention is the scarcest resource: the interface must be a single, focused interaction with large typography and zero distractions.
2. Privacy is the product: COPPA-safe behavior, no child email or birth date, parent-controlled identity, zero-retention settings, and full cascade deletion are non-negotiable.
3. Audio is ephemeral: captured in memory, processed in memory, never written to disk — the pipeline must prove it, not claim it.
4. Encouragement is brief and structured: TTS feedback is 1–2 short sentences; grading uses Structured Outputs and never invents scores.
5. Parent trust drives adoption: the consent flow must be clear, billing transparent, and the dashboard must show real progress — not decorative metrics.

## Accessibility & Inclusion

- Large typography and minimal distractions for child users (ages 5–8)
- Parent-controlled consent flow (required before any session)
- Cross-browser audio compatibility (iOS Safari quirks handled: user gesture for mic, WebAudio resampling, MIME fallbacks)
- Streaming TTS minimizes perceived lag for children
- No links or complex navigation in the child interface
- Row Level Security ensures parents only access their own children's data