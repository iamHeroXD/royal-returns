import { MetadataRoute } from 'next';
import { companyData } from '@/data/companyData';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${companyData.websiteUrl}sitemap.xml`,
  };
}
