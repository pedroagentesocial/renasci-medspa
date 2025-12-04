import type { APIRoute } from 'astro';
import { serviciosUnificados } from '../data/services-unified';

export const GET: APIRoute = async ({ url }) => {
  const base = `${url.origin}`;

  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/membership',
    '/privacy',
    '/terms'
  ];

  const serviceRoutes = Array.from(new Set(serviciosUnificados.map(s => s.href))).filter(Boolean);

  const pages = [...staticRoutes, ...serviceRoutes];

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/services') ? '0.8' : '0.6'}</priority>
  </url>`
  )
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

