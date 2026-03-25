'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import markets from '@/data/markets.json';
import { Market } from '@/types/market';
import Toast from '@/components/Toast';

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Politik: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    Sport: 'bg-green-500/20 text-green-400 border border-green-500/30',
    Celebs: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    Tech: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    WTF: 'bg-red-500/20 text-red-400 border border-red-500/30',
  };
  return colors[category] || 'bg-slate-500/20 text-slate-400';
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
        <h2 className="text-2xl font-bold mb-2">Trh nenalezen</h2>
        <p className="text-slate-400 mb-6">Tohle neexistuje. Asi ještě.</p>
        <Link href="/" className="text-purple-400 hover:text-purple-300 font-semibold">
          ← Zpět na hlavní stránku
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm mb-6 inline-block transition-colors">
        ← Zpět na přehled
      </Link>

      {/* Market header */}
      <div className="glass-card p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`category-badge ${getCategoryColor(market.category)}`}>
            {market.category}
          </span>
          <span className="text-3xl">{market.emoji}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">{market.question}</h1>
        <p className="text-slate-400 leading-relaxed mb-6">{market.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center glass-card p-3">
            <div className="text-2xl font-bold text-green-400">{market.yesPercent}%</div>
            <div className="text-xs text-slate-500 mt-1">Ano</div>
          </div>
          <div className="text-center glass-card p-3">
            <div className="text-2xl font-bold text-red-400">{market.noPercent}%</div>
            <div className="text-xs text-slate-500 mt-1">Ne</div>
          </div>
          <div className="text-center glass-card p-3">
            <div className="text-2xl font-bold text-purple-400">{market.totalBets.toLocaleString('cs-CZ')}</div>
            <div className="text-xs text-slate-500 mt-1">Sázek</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-green-400 font-semibold">✅ Ano {market.yesPercent}%</span>
            <span className="text-red-400 font-semibold">❌ Ne {market.noPercent}%</span>
          </div>
          <div className="h-4 rounded-full bg-white/10 overflow-hidden flex">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all"
              style={{ width: `${market.yesPercent}%` }}
            />
            <div
              className="h-full bg-gradient-to-r from-red-400 to-red-500 transition-all"
              style={{ width: `${market.noPercent}%` }}
            />
          </div>
        </div>

        {/* Deadline */}
        <div className="text-sm text-slate-500 mb-6">
          ⏰ Uzávěrka: <span className="text-slate-300 font-semibold">{formatDeadline(market.deadline)}</span>
        </div>

        {/* Bet buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowToast(true)}
            className="flex-1 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all active:scale-95"
          >
            👍 Sázím ANO
          </button>
          <button
            onClick={() => setShowToast(true)}
            className="flex-1 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all active:scale-95"
          >
            👎 Sázím NE
          </button>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="glass-card p-6 mb-6">
        <h2 className="text-lg font-bold mb-4">📈 Vývoj predikce</h2>
        <div className="h-48 flex items-center justify-center border border-dashed border-white/10 rounded-lg">
          <div className="text-center text-slate-500">
            <span className="text-3xl block mb-2">📊</span>
            <p className="text-sm">Graf bude brzy k dispozici</p>
          </div>
        </div>
      </div>

      {/* Comments placeholder */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-bold mb-4">💬 Diskuze</h2>
        <div className="space-y-4">
          {[
            { user: 'PrahaPrediktor', text: 'Tohle je jasný, sázím ano! 🚀', time: 'před 2h' },
            { user: 'BrnoBaron', text: 'Lol, to se nestane ani za 100 let 😂', time: 'před 5h' },
            { user: 'CryptoKarel', text: 'Kdybych měl korunu za každou predikci...', time: 'včera' },
          ].map((comment, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-white/5">
              <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300 shrink-0">
                {comment.user[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-purple-300">{comment.user}</span>
                  <span className="text-xs text-slate-600">{comment.time}</span>
                </div>
                <p className="text-sm text-slate-400 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowToast(true)}
          className="mt-4 w-full py-2.5 rounded-lg border border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20 transition-all text-sm"
        >
          ✍️ Přidat komentář...
        </button>
      </div>

      <Toast message="Coming soon! Pracujeme na tom 🔧" visible={showToast} onHide={hideToast} />
    </div>
  );
}
