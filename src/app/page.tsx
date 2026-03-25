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
      <section className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Předpověz budoucnost 🇨🇿
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Tipni si, co se stane. Žádné peníze, jen tvůj mozek vs. dav.
          Kdo bude mít pravdu?
        </p>
        <div className="mt-6 flex justify-center gap-4 text-sm text-slate-500">
          <span className="glass-card px-4 py-2">📊 {markets.length} trhů</span>
          <span className="glass-card px-4 py-2">🎯 {markets.reduce((a, m) => a + m.totalBets, 0).toLocaleString('cs-CZ')} sázek</span>
          <span className="glass-card px-4 py-2">🔥 Aktivní</span>
        </div>
      </section>

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
        <div className="text-center py-16 text-slate-500">
          <span className="text-4xl block mb-4">🤷</span>
          <p>V téhle kategorii zatím nic. Brzy přidáme!</p>
        </div>
      )}
    </div>
  );
}
