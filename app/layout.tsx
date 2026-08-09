import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'World Imports Celulares e Games | Catalão - GO',
  description: 'World Imports Celulares e Games em Catalão - GO. Consulte celulares, games, acessórios e produtos de tecnologia. Fale conosco pelo WhatsApp.',
  keywords: 'celulares catalão, games catalão, world imports, loja de celulares goiás, tecnologia catalão go',
  openGraph: {
    title: 'World Imports Celulares e Games | Catalão - GO',
    description: 'Celulares, games e tecnologia em Catalão - GO. Fale pelo WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📱</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
