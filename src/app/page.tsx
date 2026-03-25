'use client';

import { useState } from 'react';
import markets from '@/data/markets.json';
import { Market, Category } from '@/types/market';
import MarketCard from '@/components/MarketCard';
import CategoryFilter from '@/components/CategoryFilter';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filtered = selectedCategory === 'all'
    ? markets
    : markets.filter((m) => m.category === selectedCategory);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-wider text-white uppercase">
          Předpověz budoucnost <span className="text-gold">🇨🇿</span>
        </h2>
        <p className="text-base text-zinc-500 max-w-xl mx-auto tracking-wide">
          Tipni si, co se stane. Žádné peníze, jen tvůj mozek vs. dav.
        </p>

        {/* Three stripe divider */}
        <div className="flex justify-center gap-1 my-5">
          <div className="w-12 h-[2px] bg-white/15"></div>
          <div className="w-12 h-[2px] bg-white/15"></div>
          <div className="w-12 h-[2px] bg-white/15"></div>
        </div>

        <div className="flex justify-center gap-3 text-sm text-zinc-500">
          <span className="glass-card px-4 py-2 tracking-wider font-semibold">📊 {markets.length} trhů</span>
          <span className="glass-card px-4 py-2 tracking-wider font-semibold">🎯 {markets.reduce((a, m) => a + m.totalBets, 0).toLocaleString('cs-CZ')} sázek</span>
          <span className="glass-card px-4 py-2 tracking-wider font-semibold">🔥 Aktivní</span>
        </div>
      </section>

      {/* Three stripe divider */}
      <div className="flex gap-[2px] mb-6">
        <div className="h-[2px] flex-1 bg-white/8"></div>
        <div className="h-[2px] flex-1 bg-white/8"></div>
        <div className="h-[2px] flex-1 bg-white/8"></div>
      </div>

      {/* Categories */}
      <section className="mb-8">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </section>

      {/* Market grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(filtered as Market[]).map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <span className="text-4xl block mb-4">🤷</span>
          <p className="tracking-wider uppercase font-semibold">Načítám, brácho...</p>
          <p className="text-sm mt-2">V téhle kategorii zatím nic.</p>
        </div>
      )}

      {/* Bottom three stripe divider */}
      <div className="flex gap-[2px] mt-10">
        <div className="h-[2px] flex-1 bg-white/6"></div>
        <div className="h-[2px] flex-1 bg-white/6"></div>
        <div className="h-[2px] flex-1 bg-white/6"></div>
      </div>
    </div>
  );
}
