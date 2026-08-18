import React from 'react';
import { companyData } from '@/data/companyData';

export const SchemaJsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: companyData.fullBrandPresentation,
    alternateName: companyData.brandName,
    url: companyData.websiteUrl,
    logo: companyData.websiteUrl + 'logo.png',
    email: companyData.email,
    telephone: companyData.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Akkulam, Thiruvananthapuram',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Thiruvananthapuram, Kerala, India',
    },
    description: 'Royal Returns Financial Solutions provides transparent loan advisory, housing finance assistance, personal & business funding guidance, and savings options in Thiruvananthapuram, Kerala.',
    provider: {
      '@type': 'Organization',
      name: companyData.fullBrandPresentation,
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};
