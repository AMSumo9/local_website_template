import { defineCollection, z } from 'astro:content';

// 1. Locations Collection
const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_description: z.string(),
    city_name: z.string(),
    state: z.string().optional(),
    order: z.number().optional(),
    subtitle: z.string().optional(),
    geo_lat: z.string().optional(),
    geo_long: z.string().optional(),
    last_updated: z.string().optional(),
    hero_image: z.string().optional(),
    is_hub: z.boolean().optional(),
    area_served: z.array(z.object({ name: z.string(), postcode: z.string() })).optional(),
    key_benefits: z.array(z.object({ icon: z.string(), title: z.string(), description: z.string() })).optional(),
    market_insights: z.array(z.object({ label: z.string(), value: z.string(), source: z.string().optional() })).optional(),
    insights_title: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string(), source: z.string().optional() })).optional(),
  }),
});

// 2. Posts Collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string().default('The Team'),
    categories: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    featured_image: z.string().optional(),
    featured_image_alt: z.string().optional(),
    meta_description: z.string(),
    meta_keywords: z.string().optional(),
    tags: z.array(z.string()).optional(),
    read_time: z.number().optional(),
    icon: z.string().optional(),
  }),
});

// 3. Services Collection
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_description: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string().optional(),
    hero_highlight: z.string().optional(),
    hero_image: z.string().optional(),
    service_type: z.string().optional(), // For Schema.org
    key_benefits: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    features_title: z.string().optional(),
    icon: z.string().optional(), // For the grid
  }),
});

// --- 4. NEW: Testimonials Collection ---
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string(), // e.g., "J. & S."
    location: z.string().optional(), // <-- Make 100% sure .optional() is here
    service: z.string().optional(), // Service type the testimonial is about
    review: z.string(), // The text of the testimonial
    rating: z.number().min(1).max(5).optional(), // 1-5 stars
    date: z.string().transform((str) => new Date(str)).optional(),
  }),
});

// Export all collections
export const collections = {
  'locations': locationsCollection,
  'posts': postsCollection,
  'services': servicesCollection,
  'testimonials': testimonialsCollection, // <-- ADDED
};