import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingMobileCTA } from '@/components/FloatingMobileCTA';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';
import { companyData } from '@/data/companyData';

export const metadata: Metadata = {
  title: {
    default: `${companyData.fullBrandPresentation} | Loans & Financial Guidance in Thiruvananthapuram`,
    template: `%s | ${companyData.brandName}`,
  },
  description: 'Explore home loans, personal loans, business funding, property finance, vehicle loans, education loans, savings and financial guidance with Royal Returns Financial Solutions in Akkulam, Thiruvananthapuram, Kerala.',
  keywords: [
    'financial solutions Thiruvananthapuram',
    'loan advisory Thiruvananthapuram',
    'home loan assistance Thiruvananthapuram',
    'business loan assistance Kerala',
    'personal loan assistance Thiruvananthapuram',
    'loan against property Kerala',
    'education loan guidance Trivandrum',
    'Royal Returns Financial Solutions',
  ],
  authors: [{ name: companyData.fullBrandPresentation }],
  metadataBase: new URL(companyData.websiteUrl),
  openGraph: {
    title: `${companyData.fullBrandPresentation} | Thiruvananthapuram`,
    description: 'Trusted financial solutions and loan advisory services in Akkulam, Thiruvananthapuram, Kerala.',
    url: companyData.websiteUrl,
    siteName: companyData.fullBrandPresentation,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: companyData.fullBrandPresentation,
    description: 'Trusted financial guidance and loan solutions in Thiruvananthapuram, Kerala.',
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaJsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-warmBg text-navy-950 pb-28 lg:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
