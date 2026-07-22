import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/siteConfig';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.subtitle} | Estúdio de Pilates & Reabilitação em Blumenau`,
  description: siteConfig.taglines.heroSubtitle,
  keywords: [
    'Pilates Blumenau',
    'Reabilitação Blumenau',
    'Fisioterapia Blumenau',
    'Dr Mateus Cabral',
    'Aparelhos Kauffer',
    'Dor crônica Blumenau',
    'CabralMov',
    'Estúdio de Pilates Centro Blumenau',
  ],
  authors: [{ name: 'CabralMov' }],
  creator: 'CabralMov',
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.subtitle} em Blumenau`,
    description: siteConfig.taglines.heroSubtitle,
    url: 'https://cabralmov.com.br',
    siteName: 'CabralMov',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.subtitle}`,
    description: siteConfig.taglines.heroSubtitle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${siteConfig.name} — ${siteConfig.subtitle}`,
    image: 'https://cabralmov.com.br/images/hero.jpg',
    '@id': 'https://cabralmov.com.br',
    url: 'https://cabralmov.com.br',
    telephone: siteConfig.whatsappNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.enderecoCompleto,
      addressLocality: 'Blumenau',
      addressRegion: 'SC',
      postalCode: '89010-001',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.9189689,
      longitude: -49.0664917,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '06:00',
      closes: '20:00',
    },
    sameAs: [siteConfig.instagramUrl],
  };

  return (
    <html lang="pt-BR" className={`${caveat.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans selection:bg-olive selection:text-paper min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
