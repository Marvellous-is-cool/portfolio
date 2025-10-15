import { siteConfig } from './metadata';

export default function sitemap() {
  const routes = [
    '',
    '/work',
    '/resume',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Add project URLs
  const projectRoutes = siteConfig.projects.map((project) => ({
    url: project.url,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
