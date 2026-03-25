import Link from 'next/link';
import { Market } from '@/types/market';

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

export default function MarketCard({ market }: { market: Market }) {
  return (
    <Link href={`/market/${market.id}`}>
      <div className="concrete-card p-5 cursor-pointer h-full flex flex-col">
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <span className={`category-badge ${getCategoryColor(market.category)}`}>
            {categoryIcons[market.category] || '📌'} {market.category}
          </span>
          <span className="text-2xl">{market.emoji}</span>
        </div>

        {/* Question */}
        <h3 className="text-lg font-bold leading-tight mb-4 flex-grow tracking-wide uppercase">
          {market.question}
        </h3>

        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-400 font-bold tracking-wider">ANO {market.yesPercent}%</span>
            <span className="text-red-400 font-bold tracking-wider">NE {market.noPercent}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill-yes" style={{ width: `${market.yesPercent}%` }} />
          </div>
        </div>

        {/* Three stripe mini divider */}
        <div className="flex gap-[2px] mb-3">
          <div className="h-[1px] flex-1 bg-white/8"></div>
          <div className="h-[1px] flex-1 bg-white/8"></div>
          <div className="h-[1px] flex-1 bg-white/8"></div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-zinc-600 font-semibold tracking-wider">
          <span>🎯 {market.totalBets.toLocaleString('cs-CZ')} sázek</span>
          <span>⏰ {formatDeadline(market.deadline)}</span>
        </div>
      </div>
    </Link>
  );
}
