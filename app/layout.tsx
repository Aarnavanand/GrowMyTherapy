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
  metadataBase: new URL('https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app/'),
  title: 'Dr. Maya Reynolds, PsyD | Therapy for Adults in Santa Monica, CA',
  description: 'Specialized therapy for high-achieving professionals in Santa Monica. Expertise in burnout, trauma (EMDR), and relationship dynamics.',
  keywords: ['Therapy Santa Monica', 'Psychologist Santa Monica', 'EMDR Therapy', 'Burnout Recovery', 'Relationship Therapy', 'Dr. Maya Reynolds'],
  authors: [{ name: 'Dr. Maya Reynolds, PsyD' }],
  creator: 'Dr. Maya Reynolds, PsyD',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app/',
    title: 'Dr. Maya Reynolds, PsyD | Therapy for Adults in Santa Monica, CA',
    description: 'Specialized therapy for high-achieving professionals in Santa Monica. Moving you from burnout to sustainable balance.',
    siteName: 'Dr. Maya Reynolds, PsyD',
    images: [
      {
        url: '/drmaya.png', // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
        alt: 'Dr. Maya Reynolds, PsyD - Therapy Santa Monica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maya Reynolds, PsyD | Therapy for Adults in Santa Monica, CA',
    description: 'Specialized therapy for high-achieving professionals in Santa Monica. Moving you from burnout to sustainable balance.',
    images: ['/drmaya.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app/',
  },
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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'MedicalBusiness',
                name: 'Dr. Maya Reynolds, PsyD',
                description: 'Specialized therapy for high-achieving professionals in Santa Monica. Expertise in burnout, trauma (EMDR), and relationship dynamics.',
                image: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app//drmaya.png',
                '@id': 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app//#business',
                url: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app/',
                telephone: '(555) 555-5555',
                priceRange: '$$$',
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
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday'
                    ],
                    opens: '10:00',
                    closes: '18:00'
                  }
                ],
                sameAs: [
                  // Add social media URLs here if available
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is your therapeutic approach?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'I believe in a warm, collaborative, and grounded approach to healing. I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT) and EMDR with mindfulness and body-oriented techniques.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How can EMDR help with my past experiences?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'EMDR is a powerful tool for trauma work, whether you\'ve experienced a single-incident trauma or long-standing patterns. This approach is paced carefully, with a focus on safety and stabilization.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you offer in-person sessions in Santa Monica?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. While I offer secure telehealth sessions for clients throughout California, I also provide in-person therapy at my Santa Monica office.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Who is your ideal client?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'I frequently work with high-achieving professionals, entrepreneurs, and creatives who may look \'functional\' on the outside but are quietly struggling with burnout, anxiety, or perfectionism.'
                    }
                  }
                ]
              }
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
