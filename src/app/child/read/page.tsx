import { MicButton } from "@/components/ui/mic-button";

export default function ChildReading() {
  return (
    <div className="min-h-screen bg-teal-950 text-teal-50 font-sans selection:bg-amber-300/30 flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl text-center space-y-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-teal-400">Read</h1>
        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-teal-200">The little bird hops. <br/>Can you say it?</p>
        <MicButton />
        <div className="flex gap-4 justify-center text-sm font-bold text-teal-400 uppercase tracking-widest">
          <span>5 min</span><span>•</span><span>Coppa Safe</span>
        </div>
      </main>
    </div>
  );
}
