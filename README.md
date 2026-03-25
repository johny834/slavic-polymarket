# 🔮 Slavic Polymarket

**Sázky na budoucnost. Bez peněz, jen ego.**

A sleek, Czech-themed prediction market web app. No real money — just predictions and glory.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)

## ✨ Features

- 🏛️ **Prediction Markets** — Browse and explore prediction questions
- 📊 **Live-style UI** — Glassmorphism cards, dark mode, bold typography
- 🏷️ **Categories** — Politik, Sport, Celebs, Tech, WTF
- 📱 **Mobile-first** — Responsive design that looks great everywhere
- 🇨🇿 **Czech language** — Plně v češtině

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── market/[id]/page.tsx # Market detail
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MarketCard.tsx
│   ├── CategoryFilter.tsx
│   └── Toast.tsx
├── data/
│   └── markets.json        # Static market data
└── types/
    └── market.ts           # TypeScript types
```

## 🎨 Design

- **Dark mode** with glassmorphism cards
- **Purple/blue gradient** accents
- **Inter** font family
- Playful emoji-driven UI

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Static JSON data (ready for API integration)

## 📦 Deploy

Ready for **Vercel** — just connect the repo and deploy.

```bash
npm run build
```

## ⚠️ Disclaimer

Žádné skutečné peníze. Jen predikce a sláva. 🔮
