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
}

export const useBlogPostsListing = () => {
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

      console.log({data});
      clearTimeout(timeoutId);

      // data already transformed by backend if you use service mapping;
      // if not, you can transform here. (In my backend service, it's already transformed.)
      const transformed = data as BlogPostListing[];
      
      try {
        localStorage.setItem("blog_posts_listing_cache", JSON.stringify(transformed));
        localStorage.setItem("blog_posts_listing_timestamp", Date.now().toString());
      } catch (cacheError) {
        console.warn("Failed to cache blog posts:", cacheError);
        try {
          localStorage.removeItem("blog_posts_listing_cache");
          localStorage.removeItem("blog_posts_listing_timestamp");
        } catch(err) {
          console.error(err)
        }
      }

      setPosts(transformed);
      setLoading(false);
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.error("Error fetching blog posts:", err);

      if (retryCount < 3 && err.name !== "AbortError") {
        const delay = 1000 * Math.pow(2, retryCount);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchPosts(retryCount + 1);
      }

      const cached = localStorage.getItem("blog_posts_listing_cache");
      const timestamp = localStorage.getItem("blog_posts_listing_timestamp");
      const cacheAge = timestamp ? Date.now() - parseInt(timestamp) : Infinity;

      if (cached && cacheAge < 24 * 60 * 60 * 1000) {
        setPosts(JSON.parse(cached));
        setError("Showing cached posts. Some content may be outdated.");
      } else {
        setError("Failed to load blog posts. Please check your connection and try again.");
      }

      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
};
