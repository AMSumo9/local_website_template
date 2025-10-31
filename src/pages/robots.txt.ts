// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

// Change the function signature to accept the 'context' object
export const GET: APIRoute = (context) => { 
  
  // Get 'site' from the context, NOT the Astro global
  const siteUrl = context.site; 

  if (!siteUrl) {
    console.warn(
      'Site URL is not set in astro.config.mjs. robots.txt will be empty.'
    );
    return new Response('User-agent: *\nDisallow: /', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // Get the root URL and remove any trailing slash
  const rootUrl = siteUrl.href.endsWith('/') ? siteUrl.href.slice(0, -1) : siteUrl.href;

  const robotsTxtContent = `
User-agent: *
Allow: /

Sitemap: ${rootUrl}/sitemap-0.xml
  `.trim(); 

  return new Response(robotsTxtContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};