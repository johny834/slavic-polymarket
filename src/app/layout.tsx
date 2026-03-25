import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SLAVIC POLYMARKET 🧎 | Sázky na budoucnost',
  description: 'Sázky na budoucnost. Bez peněz, jen ego a tepláky.',
  openGraph: {
    title: 'SLAVIC POLYMARKET 🧎',
    description: 'Sázky na budoucnost. Bez peněz, jen ego a tepláky.',
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
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
