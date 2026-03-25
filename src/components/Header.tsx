'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform">🔮</span>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Slavic Polymarket
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              Sázky na budoucnost. Bez peněz, jen ego.
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <span className="text-xs text-slate-600 hidden sm:inline">v0.1 beta</span>
          <a
            href="https://github.com/johny834/slavic-polymarket"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-3 py-1.5 text-sm text-slate-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
