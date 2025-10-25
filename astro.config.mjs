import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Ensure trailing slashes for directory-like URLs (good for SEO)
  trailingSlash: 'always', 
  // Base site configuration (can be overridden by project.json later)
  site: 'https://example.com', 
});
