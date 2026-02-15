import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapy for Adults in Santa Monica, CA',
  description: 'Specializing in self-esteem, relationships, and burnout recovery for high-achieving professionals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TherapeuticBusiness',
              name: 'Dr. Maya Reynolds, PsyD',
              description: 'Specialized therapy for high-achieving professionals in Santa Monica. Expertise in burnout, trauma (EMDR), and relationship dynamics.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123th Street 45 W',
                addressLocality: 'Santa Monica',
                addressRegion: 'CA',
                postalCode: '90401',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '34.0195',
                longitude: '-118.4912',
              },
              url: 'https://drmayareynolds.com',
              telephone: '(555) 555-5555',
              priceRange: '$$$',
              openingHours: 'Mo-Fr 10:00-18:00',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
