import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bellachicstudio.ro';
  
  const routes = [
    '',
    '/despre',
    '/servicii',
    '/servicii/coafor',
    '/servicii/manichiura',
    '/servicii/cosmetica',
    '/servicii/makeup',
    '/promotii',
    '/galerie',
    '/blog',
    '/programare',
    '/contact',
    '/termeni',
    '/confidentialitate',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}