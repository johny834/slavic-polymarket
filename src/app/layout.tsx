import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'Slavic Polymarket 🔮 | Sázky na budoucnost',
  description: 'Prediction market pro českou komunitu. Bez peněz, jen ego a sláva.',
  openGraph: {
    title: 'Slavic Polymarket 🔮',
    description: 'Sázky na budoucnost. Bez peněz, jen ego.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
