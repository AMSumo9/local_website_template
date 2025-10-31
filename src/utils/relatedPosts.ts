import type { CollectionEntry } from 'astro:content';

// --- Define our scoring rules ---
const TAG_SCORE = 2;
const CATEGORY_SCORE = 5;

// This function calculates a "relevance score" between two posts
function calculateScore(current: CollectionEntry<'posts'>['data'], other: CollectionEntry<'posts'>['data']): number {
  let score = 0;

  // Add points for shared tags
  if (current.tags && other.tags) {
    for (const tag of current.tags) {
      if (other.tags.includes(tag)) {
        score += TAG_SCORE;
      }
    }
  }

  // Add points for shared categories
  if (current.categories && other.categories) {
    for (const category of current.categories) {
      if (other.categories.includes(category)) {
        score += CATEGORY_SCORE;
      }
    }
  }

  return score;
}

// --- This is the main function we'll use in our layout ---
export function getRelatedPosts(
  allPosts: CollectionEntry<'posts'>[],
  currentPost: CollectionEntry<'posts'>,
  limit: number = 3
): CollectionEntry<'posts'>[] {
  
  const scoredPosts = allPosts
    .map(post => {
      // Don't compare a post to itself
      if (post.slug === currentPost.slug) {
        return null;
      }

      const score = calculateScore(currentPost.data, post.data);
      
      return { post, score };
    })
    .filter(item => item !== null && item.score > 0); // Filter out self and posts with no score

  // Sort by highest score first
  scoredPosts.sort((a, b) => b!.score - a!.score);

  // Return just the post objects, up to the limit
  return scoredPosts.slice(0, limit).map(item => item!.post);
}