import type { APIRoute } from 'astro';
import { serviciosUnificados, categoriasUnificadas } from '../data/services-unified';

export const GET: APIRoute = async ({ url }) => {
  const base = `${url.origin}`;
  const today = new Date().toISOString().split('T')[0];

  type Page = { path: string; priority: string; changefreq: string };

  const staticPages: Page[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/membership', priority: '0.8', changefreq: 'monthly' },
    { path: '/men', priority: '0.7', changefreq: 'monthly' },
    { path: '/book', priority: '0.9', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];

  // City landing pages for local SEO
  const cityPages: Page[] = [
    { path: '/medical-spa-salt-lake-city', priority: '0.9', changefreq: 'monthly' },
    { path: '/medical-spa-midvale', priority: '0.9', changefreq: 'monthly' },
    { path: '/medical-spa-sandy-utah', priority: '0.8', changefreq: 'monthly' },
    { path: '/medical-spa-murray-utah', priority: '0.8', changefreq: 'monthly' },
    { path: '/medical-spa-south-jordan-utah', priority: '0.8', changefreq: 'monthly' },
    { path: '/medical-spa-draper-utah', priority: '0.8', changefreq: 'monthly' }
  ];

  // Service category pages
  const categoryHrefs = new Set<string>();
  categoriasUnificadas.forEach((cat: any) => {
    if (cat?.slug) categoryHrefs.add(`/services/${cat.slug}`);
  });
  const categoryPages: Page[] = Array.from(categoryHrefs).map((path) => ({
    path,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  // Individual service pages from canonical data
  const serviceHrefs = new Set<string>();
  serviciosUnificados.forEach((s: any) => {
    if (s?.href) serviceHrefs.add(s.href);
    else if (s?.slug) serviceHrefs.add(`/services/${s.slug}`);
  });
  const servicePages: Page[] = Array.from(serviceHrefs).map((path) => ({
    path,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allPages: Page[] = [
    ...staticPages,
    ...cityPages,
    ...categoryPages,
    ...servicePages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map((p) => {
    const loc = `${base}${p.path}`;
    const enLoc = `${loc}${loc.includes('?') ? '&' : '?'}lang=en`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es-US" href="${loc}" />
    <xhtml:link rel="alternate" hreflang="en-US" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
