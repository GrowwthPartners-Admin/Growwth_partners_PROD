import { useEffect, useState, useCallback } from "react";
import { fetchBlogPostsListing } from "@/lib/blogApi";

export interface BlogPostListing {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  excerpt: string;
  author: string;
  categories: string[];
  publishDate: string;
  region?: string;
}

export const useBlogPostsListing = (country: string = 'sg') => {
  const [posts, setPosts] = useState<BlogPostListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async (retryCount = 0) => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const data = await fetchBlogPostsListing();
      console.log({data})
      clearTimeout(timeoutId);

      // data already transformed by backend if you use service mapping;
      // if not, you can transform here. (In my backend service, it's already transformed.)
      const allPosts = data as BlogPostListing[];
      
      // Filter posts based on country/region
      // Australia shows ONLY 'australia' region posts
      // Singapore and UAE show 'global' or 'all' region posts
      const filteredPosts = allPosts.filter(post => {
        const postRegion = post.region || 'global';
        if (country === 'australia' ||  country === 'au') {
          // Australia: show ONLY 'australia' region posts
          return postRegion === 'australia' || postRegion=== "all";
        } else {
          // Singapore (sg) and UAE (uae): show 'global' or 'all' region posts
          return postRegion === 'global' || postRegion === 'all';
        }
      });
      
      try {
        localStorage.setItem(`blog_posts_listing_cache_${country}`, JSON.stringify(filteredPosts));
        localStorage.setItem(`blog_posts_listing_timestamp_${country}`, Date.now().toString());
      } catch (cacheError) {
        console.warn("Failed to cache blog posts:", cacheError);
        try {
          localStorage.removeItem(`blog_posts_listing_cache_${country}`);
          localStorage.removeItem(`blog_posts_listing_timestamp_${country}`);
        } catch(err) {
          console.error(err)
        }
      }

      setPosts(filteredPosts);
      setLoading(false);
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("Error fetching blog posts:", err);

      if (retryCount < 3 && err.name !== "AbortError") {
        const delay = 1000 * Math.pow(2, retryCount);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchPosts(retryCount + 1);
      }

      const cached = localStorage.getItem(`blog_posts_listing_cache_${country}`);
      const timestamp = localStorage.getItem(`blog_posts_listing_timestamp_${country}`);
      const cacheAge = timestamp ? Date.now() - parseInt(timestamp) : Infinity;

      if (cached && cacheAge < 24 * 60 * 60 * 1000) {
        setPosts(JSON.parse(cached));
        setError("Showing cached posts. Some content may be outdated.");
      } else {
        setError("Failed to load blog posts. Please check your connection and try again.");
      }

      setLoading(false);
    }
  }, [country]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
};
