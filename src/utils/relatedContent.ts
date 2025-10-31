// src/utils/relatedContent.ts
import { getCollection } from 'astro:content';

/**
 * Find blog posts related to a location
 */
export async function getRelatedPostsForLocation(cityName: string, limit = 3) {
  try {
    const allPosts = await getCollection('posts');
    const cityLower = cityName.toLowerCase();
    
    // Score posts by relevance
    const scored = allPosts.map(post => {
      let score = 0;
      const title = post.data.title.toLowerCase();
      const excerpt = post.data.excerpt?.toLowerCase() || '';
      const content = post.body.toLowerCase();
      
      // Title match = highest score
      if (title.includes(cityLower)) score += 10;
      
      // Excerpt match
      if (excerpt.includes(cityLower)) score += 5;
      
      // Content match
      if (content.includes(cityLower)) score += 2;
      
      // Tag match
      if (post.data.tags?.some(tag => tag.toLowerCase().includes(cityLower))) score += 7;
      
      return { post, score };
    });
    
    // Return top matches with score > 0
    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);
  } catch (error) {
    console.warn('Could not fetch related posts:', error);
    return [];
  }
}

/**
 * Find locations related to a blog post
 */
export async function getRelatedLocationsForPost(postTags: string[] = [], limit = 3) {
  try {
    const allLocations = await getCollection('locations');
    
    if (postTags.length === 0) {
      // Return random locations if no tags
      return allLocations
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
    }
    
    const tagsLower = postTags.map(tag => tag.toLowerCase());
    
    const scored = allLocations.map(location => {
      let score = 0;
      const cityName = location.data.city_name.toLowerCase();
      
      // Check if any tag mentions this city
      tagsLower.forEach(tag => {
        if (tag.includes(cityName)) score += 10;
      });
      
      return { location, score };
    });
    
    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.location);
  } catch (error) {
    console.warn('Could not fetch related locations:', error);
    return [];
  }
}

/**
 * Find services related to a location or post
 */
export async function getRelatedServices(keywords: string[] = [], limit = 3) {
  try {
    const allServices = await getCollection('services');
    
    if (keywords.length === 0) {
      // Return all services if no keywords
      return allServices.slice(0, limit);
    }
    
    const keywordsLower = keywords.map(k => k.toLowerCase());
    
    const scored = allServices.map(service => {
      let score = 0;
      const title = service.data.title.toLowerCase();
      const excerpt = service.data.excerpt?.toLowerCase() || '';
      
      keywordsLower.forEach(keyword => {
        if (title.includes(keyword)) score += 5;
        if (excerpt.includes(keyword)) score += 2;
      });
      
      return { service, score };
    });
    
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.service);
  } catch (error) {
    console.warn('Could not fetch related services:', error);
    return [];
  }
}
