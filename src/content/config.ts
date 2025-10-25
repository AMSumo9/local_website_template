import { z, defineCollection } from 'astro:content';

// Define the schema for the 'locations' collection
const locationsCollection = defineCollection({
  type: 'content', // Use 'content' for Markdown files
  schema: z.object({
    // Required fields
    title: z.string(),
    meta_description: z.string(),
    city_name: z.string(),
    // Optional fields (match your frontmatter)
    subtitle: z.string().optional(),
    state: z.string().optional(),
    order: z.number().optional(),
    is_hub: z.boolean().optional(),
    geo_lat: z.string().optional(), // Store as string, parse later if needed
    geo_long: z.string().optional(),
    area_served: z.array(z.object({
        name: z.string(),
        postcode: z.string()
    })).optional(),
    key_benefits: z.array(z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string()
    })).optional(),
    property_insights: z.array(z.object({
        label: z.string(),
        value: z.string(),
        source: z.string().optional()
    })).optional(),
    faqs: z.array(z.object({
        question: z.string(),
        answer: z.string(),
        source: z.string().optional() // Added optional source for FAQs too
    })).optional(),
    last_updated: z.string().optional(), // Expects YYYY-MM-DD format ideally
    hero_image: z.string().optional(), // Filename for hero image
  }),
});

// Define schemas for other collections here later (e.g., services, posts)
// const servicesCollection = defineCollection({...});
// const postsCollection = defineCollection({...});

// Export the collections object
export const collections = {
  'locations': locationsCollection,
  // 'services': servicesCollection,
  // 'posts': postsCollection,
};
