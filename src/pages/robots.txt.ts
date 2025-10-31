// src/pages/robots.txt.ts
export async function GET() {
  const site = import.meta.env.SITE || 'https://yourdomain.com';
  
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${site}/sitemap-index.xml

# Crawl-delay for politeness with search engines
Crawl-delay: 1

# Disallow private/admin areas if they exist
Disallow: /admin/
Disallow: /*.json$

# Allow important directories explicitly
Allow: /locations/
Allow: /services/
Allow: /blog/
`.trim();

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
