import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 1. IMPORT THE SITEMAP INTEGRATION
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    
    // 3. ADD SITEMAP() TO THE ARRAY
    sitemap()
  ],

  // Ensure trailing slashes for directory-like URLs (good for SEO)
  trailingSlash: 'always',

  // 2. SET THE 'SITE' PROPERTY (REQUIRED)
  // Use the domain from your project.json
  site: 'https://financebendigo.com.au',
});