'use client';

import { Category, CATEGORIES } from '@/types/market';

interface Props {
  selected: Category | 'all';
  onSelect: (cat: Category | 'all') => void;
}

const categoryIcons: Record<string, string> = {
  Politik: '🏛️',
  Sport: '⚽',
  Celebs: '⭐',
  Tech: '💻',
  WTF: '🤡',
};

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('all')}
        className={`px-4 py-2 rounded-sm text-sm font-bold transition-all tracking-wider uppercase ${
          selected === 'all'
            ? 'bg-amber-500/20 text-amber-400 border-2 border-amber-500/50 glow-gold'
            : 'bg-white/5 text-zinc-500 border-2 border-white/8 hover:bg-white/8 hover:text-zinc-300'
        }`}
      >
        🌍 Vše
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`px-4 py-2 rounded-sm text-sm font-bold transition-all tracking-wider uppercase ${
            selected === cat.name
              ? 'bg-amber-500/20 text-amber-400 border-2 border-amber-500/50 glow-gold'
              : 'bg-white/5 text-zinc-500 border-2 border-white/8 hover:bg-white/8 hover:text-zinc-300'
          }`}
        >
          {categoryIcons[cat.name] || cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  );
}
