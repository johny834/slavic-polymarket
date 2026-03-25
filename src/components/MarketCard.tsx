import Link from 'next/link';
import { Market } from '@/types/market';

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

export default function MarketCard({ market }: { market: Market }) {
  return (
    <Link href={`/market/${market.id}`}>
      <div className="glass-card p-5 cursor-pointer h-full flex flex-col">
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <span className={`category-badge ${getCategoryColor(market.category)}`}>
            {market.category}
          </span>
          <span className="text-2xl">{market.emoji}</span>
        </div>

        {/* Question */}
        <h3 className="text-lg font-bold leading-tight mb-4 flex-grow">
          {market.question}
        </h3>

        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-400 font-semibold">Ano {market.yesPercent}%</span>
            <span className="text-red-400 font-semibold">Ne {market.noPercent}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill-yes" style={{ width: `${market.yesPercent}%` }} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>🎯 {market.totalBets.toLocaleString('cs-CZ')} sázek</span>
          <span>⏰ {formatDeadline(market.deadline)}</span>
        </div>
      </div>
    </Link>
  );
}
