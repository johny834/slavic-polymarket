'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import markets from '@/data/markets.json';
import { Market } from '@/types/market';
import Toast from '@/components/Toast';

const categoryIcons: Record<string, string> = {
  Politik: '🏛️',
  Sport: '⚽',
  Celebs: '⭐',
  Tech: '💻',
  WTF: '🤡',
};

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Politik: 'bg-blue-900/40 text-blue-400 border border-blue-500/30',
    Sport: 'bg-green-900/40 text-green-400 border border-green-500/30',
    Celebs: 'bg-yellow-900/40 text-yellow-400 border border-yellow-500/30',
    Tech: 'bg-purple-900/40 text-purple-400 border border-purple-500/30',
    WTF: 'bg-red-900/40 text-red-400 border border-red-500/30',
  };
  return colors[category] || 'bg-zinc-800/40 text-zinc-400';
}

function formatDeadline(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function MarketDetail() {
  const params = useParams();
  const [showToast, setShowToast] = useState(false);
  const hideToast = useCallback(() => setShowToast(false), []);

  const market = (markets as Market[]).find((m) => m.id === params.id);

  if (!market) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <span className="text-6xl block mb-4">😵</span>
        <h2 className="text-2xl font-bold mb-2 tracking-wider uppercase">Trh nenalezen</h2>
        <p className="text-zinc-500 mb-6">Tohle neexistuje. Asi ještě.</p>
        <Link href="/" className="text-gold hover:text-amber-400 font-bold tracking-wider uppercase">
          ← Zpět na hlavní stránku
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link href="/" className="text-zinc-600 hover:text-zinc-300 text-sm mb-6 inline-block transition-colors tracking-wider uppercase font-semibold">
        ← Zpět na přehled
      </Link>

      {/* Market header */}
      <div className="concrete-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`category-badge ${getCategoryColor(market.category)}`}>
            {categoryIcons[market.category] || '📌'} {market.category}
          </span>
          <span className="text-3xl">{market.emoji}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wider uppercase">{market.question}</h1>
        <p className="text-zinc-400 leading-relaxed mb-6">{market.description}</p>

        {/* Three stripe divider */}
        <div className="flex gap-[2px] mb-6">
          <div className="h-[2px] flex-1 bg-white/8"></div>
          <div className="h-[2px] flex-1 bg-white/8"></div>
          <div className="h-[2px] flex-1 bg-white/8"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center concrete-card p-3">
            <div className="text-2xl font-bold text-green-400">{market.yesPercent}%</div>
            <div className="text-xs text-zinc-600 mt-1 tracking-wider uppercase font-semibold">Ano</div>
          </div>
          <div className="text-center concrete-card p-3">
            <div className="text-2xl font-bold text-red-400">{market.noPercent}%</div>
            <div className="text-xs text-zinc-600 mt-1 tracking-wider uppercase font-semibold">Ne</div>
          </div>
          <div className="text-center concrete-card p-3">
            <div className="text-2xl font-bold text-gold">{market.totalBets.toLocaleString('cs-CZ')}</div>
            <div className="text-xs text-zinc-600 mt-1 tracking-wider uppercase font-semibold">Sázek</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-green-400 font-bold tracking-wider">✅ ANO {market.yesPercent}%</span>
            <span className="text-red-400 font-bold tracking-wider">❌ NE {market.noPercent}%</span>
          </div>
          <div className="h-4 rounded-sm bg-white/5 overflow-hidden flex border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-500 transition-all"
              style={{ width: `${market.yesPercent}%` }}
            />
            <div
              className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all"
              style={{ width: `${market.noPercent}%` }}
            />
          </div>
        </div>

        {/* Deadline */}
        <div className="text-sm text-zinc-500 mb-6 tracking-wider">
          ⏰ Uzávěrka: <span className="text-zinc-300 font-bold">{formatDeadline(market.deadline)}</span>
        </div>

        {/* Three stripe divider */}
        <div className="flex gap-[2px] mb-6">
          <div className="h-[2px] flex-1 bg-white/8"></div>
          <div className="h-[2px] flex-1 bg-white/8"></div>
          <div className="h-[2px] flex-1 bg-white/8"></div>
        </div>

        {/* Bet buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowToast(true)}
            className="slavic-btn flex-1 py-3 text-lg bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 transition-all active:scale-95 text-white"
          >
            👍 Sázím ANO
          </button>
          <button
            onClick={() => setShowToast(true)}
            className="slavic-btn flex-1 py-3 text-lg bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 transition-all active:scale-95 text-white"
          >
            👎 Sázím NE
          </button>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="concrete-card p-6 mb-6">
        <h2 className="text-lg font-bold mb-4 tracking-wider uppercase">📈 Vývoj predikce</h2>
        <div className="h-48 flex items-center justify-center border-2 border-dashed border-white/8 rounded-sm">
          <div className="text-center text-zinc-600">
            <span className="text-3xl block mb-2">📊</span>
            <p className="text-sm tracking-wider uppercase font-semibold">Načítám, brácho...</p>
            <p className="text-xs mt-1">Graf bude brzy k dispozici</p>
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="concrete-card p-6">
        <h2 className="text-lg font-bold mb-4 tracking-wider uppercase">💬 Diskuze</h2>
        <div className="space-y-4">
          {[
            { user: 'PrahaPrediktor', text: 'Tohle je jasný, sázím ano! 🚀', time: 'před 2h' },
            { user: 'BrnoBaron', text: 'Lol, to se nestane ani za 100 let 😂', time: 'před 5h' },
            { user: 'CryptoKarel', text: 'Kdybych měl korunu za každou predikci...', time: 'včera' },
          ].map((comment, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-sm bg-white/3 border border-white/5">
              <div className="w-8 h-8 rounded-sm bg-amber-500/20 flex items-center justify-center text-sm font-bold text-amber-400 shrink-0">
                {comment.user[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-amber-400 tracking-wider">{comment.user}</span>
                  <span className="text-xs text-zinc-700">{comment.time}</span>
                </div>
                <p className="text-sm text-zinc-400 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowToast(true)}
          className="slavic-btn mt-4 w-full py-2.5 border-2 border-white/8 text-zinc-600 hover:text-zinc-300 hover:border-white/15 transition-all text-sm"
        >
          ✍️ Přidat komentář...
        </button>
      </div>

      <Toast message="Načítám, brácho... Pracujeme na tom 🧎" visible={showToast} onHide={hideToast} />
    </div>
  );
}
