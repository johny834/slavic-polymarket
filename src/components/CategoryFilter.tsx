'use client';

import { Category, CATEGORIES } from '@/types/market';

interface Props {
  selected: Category | 'all';
  onSelect: (cat: Category | 'all') => void;
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('all')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          selected === 'all'
            ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50 glow-purple'
            : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
        }`}
      >
        🌍 Vše
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selected === cat.name
              ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50 glow-purple'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
          }`}
        >
          {cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  );
}
