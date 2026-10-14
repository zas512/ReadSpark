import { MicButton } from "@/components/ui/mic-button";

export default function ChildReading() {
  return (
    <div className="min-h-screen bg-teal-950 text-teal-50 font-sans selection:bg-amber-300/30 flex flex-col items-center justify-center p-8">
      <main className="max-w-2xl text-center space-y-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-teal-50 drop-shadow-[0_4px_30px_rgba(45,212,191,0.35)]">Read</h1>
        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-teal-200">The little bird hops. <br/>Can you say it?</p>
        <MicButton />
        <div className="flex gap-4 justify-center text-sm font-bold text-teal-400 uppercase tracking-widest">
          <span>10 min cap</span><span>•</span><span>In-memory audio</span><span>•</span><span>Empty state handled</span>
        </div>
        <div className="text-xs text-teal-300/60 mt-2">Audio discarded after grading • No disk writes</div>
      </main>
    </div>
  );
}
