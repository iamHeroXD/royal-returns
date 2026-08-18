import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { companyData } from '@/data/companyData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyData.websiteUrl;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/emi-calculator',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route.replace(/^\//, '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
