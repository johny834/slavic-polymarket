export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Three stripe top border */}
      <div className="flex gap-[2px] px-4">
        <div className="h-[2px] flex-1 bg-white/10"></div>
        <div className="h-[2px] flex-1 bg-white/10"></div>
        <div className="h-[2px] flex-1 bg-white/10"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="text-center space-y-3">
          {/* Three stripes decorative */}
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-8 h-[2px] bg-white/15"></div>
            <div className="w-8 h-[2px] bg-white/15"></div>
            <div className="w-8 h-[2px] bg-white/15"></div>
          </div>

          <p className="text-sm text-zinc-500 font-semibold tracking-wider uppercase">
            ⚠️ Žádné skutečné peníze. Jen predikce, ego a tepláky.
          </p>

          <p className="text-xs text-zinc-700">
            Powered by Kofola & Párek v rohlíku 🌭
          </p>

          <p className="text-xs text-zinc-700">
            © 2026 SLAVIC POLYMARKET 🧎 • Postaveno v paneláku s Next.js
          </p>

          <p className="text-lg mt-2" title="Sandály a ponožky — the Slavic way">
            🧦🩴
          </p>

          {/* Bottom three stripes */}
          <div className="flex justify-center gap-1 pt-2">
            <div className="w-8 h-[2px] bg-white/10"></div>
            <div className="w-8 h-[2px] bg-white/10"></div>
            <div className="w-8 h-[2px] bg-white/10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
