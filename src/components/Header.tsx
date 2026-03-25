'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Left three stripes */}
          <div className="header-stripes hidden sm:flex">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🧎</span>
            <div>
              <h1 className="text-2xl font-bold tracking-wider text-white" style={{ letterSpacing: '0.15em' }}>
                SLAVIC <span className="text-gold">POLYMARKET</span>
              </h1>
              <p className="text-[10px] text-zinc-600 tracking-widest uppercase hidden sm:block">
                Sázky na budoucnost. Bez peněz, jen ego a tepláky.
              </p>
            </div>
          </div>

          {/* Right three stripes */}
          <div className="header-stripes hidden sm:flex">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <span className="stamp hidden sm:inline-block">Slav squat approved ✅</span>
          <a
            href="https://github.com/johny834/slavic-polymarket"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-3 py-1.5 text-sm text-zinc-500 hover:text-gold transition-colors tracking-wider uppercase font-semibold"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
      {/* Three stripe border */}
      <div className="flex gap-[2px] px-4">
        <div className="h-[2px] flex-1 bg-white/10"></div>
        <div className="h-[2px] flex-1 bg-white/10"></div>
        <div className="h-[2px] flex-1 bg-white/10"></div>
      </div>
    </header>
  );
}
