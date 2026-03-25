export interface Market {
  id: string;
  question: string;
  description: string;
  category: Category;
  yesPercent: number;
  noPercent: number;
  totalBets: number;
  deadline: string;
  emoji: string;
  createdAt: string;
}

export type Category = 'Politik' | 'Sport' | 'Celebs' | 'Tech' | 'WTF';

export const CATEGORIES: { name: Category; emoji: string }[] = [
  { name: 'Politik', emoji: '🏛️' },
  { name: 'Sport', emoji: '⚽' },
  { name: 'Celebs', emoji: '⭐' },
  { name: 'Tech', emoji: '💻' },
  { name: 'WTF', emoji: '🤯' },
];
