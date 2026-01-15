import { useEffect, useState, useCallback } from "react";
import {
  apiListAllPosts,
  apiCreatePost,
  apiDeletePost,
  apiUpdatePost,
} from "@/lib/blogApi";

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  heroImage?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  categories?: string[] | string;
  publishDate?: string;
  faqs?: Array<{ question?: string; answer?: string }>;
  region?: string;
}

const serializeCategories = (categories: string[]) => categories.join(",");
const deserializeCategories = (catString?: string) =>
  catString ? catString.split(",").map((c) => c.trim()) : [];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // API Fetch All
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiListAllPosts();

      // Expect backend returns supabase-like rows or already transformed.
      // Handle both safely:
      const transformed: BlogPost[] = (Array.isArray(data) ? data : []).map((post: any) => ({
        id: String(post.id),
        title: post.title || "",
        slug: post.slug || "",
        heroImage: post.heroImage ?? post.Hero_image ?? "",
        excerpt: post.excerpt ?? post.Excerpt ?? "",
        content: post.content ?? post.Content ?? "",
        author: post.author ?? post.Author ?? "",
        categories: Array.isArray(post.categories)
          ? post.categories
          : Array.isArray(post.Categories)
          ? post.Categories
          : deserializeCategories(post.categories ?? post.Categories ?? ""),
        publishDate: post.publishDate ?? post.publishdate ?? "",
        faqs: Array.isArray(post.faqs) ? post.faqs : [],
        region: post.region || "global",
      }));

      setPosts(transformed);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

  // Create post
  const addPost = async (post: Omit<BlogPost, "id" | "publishDate">) => {
    setLoading(true);
    try {
      const payload = {
        title: post.title,
        slug: post.slug,
        heroImage: post.heroImage ?? "",
        excerpt: post.excerpt ?? "",
        content: post.content ?? "",
        author: post.author ?? "",
        categories: Array.isArray(post.categories)
          ? serializeCategories(post.categories)
          : post.categories ?? "",
        faqs: post.faqs || [],
        region: post.region || "global",
      };

      const created = await apiCreatePost(payload);
      await fetchPosts();
      return created;
    } finally {
      setLoading(false);
    }
  };

  // Delete post
  const deletePost = async (id: string) => {
    setLoading(true);
    try {
      const result = await apiDeletePost({ id });
      await fetchPosts();
      return !!result;
    } catch (e) {
      console.error("Delete failed:", e);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Update post
  const updatePost = async (id: string, updatedPost: Partial<BlogPost> & { title: string }) => {
    setLoading(true);
    try {
      const payload: any = {
        id,
        title: updatedPost.title,
      };

      if (updatedPost.slug !== undefined) payload.slug = updatedPost.slug;
      if (updatedPost.heroImage !== undefined) payload.heroImage = updatedPost.heroImage;
      if (updatedPost.excerpt !== undefined) payload.excerpt = updatedPost.excerpt;
      if (updatedPost.content !== undefined) payload.content = updatedPost.content;
      if (updatedPost.author !== undefined) payload.author = updatedPost.author;

      if (updatedPost.categories !== undefined) {
        payload.categories = Array.isArray(updatedPost.categories)
          ? serializeCategories(updatedPost.categories)
          : updatedPost.categories;
      }

      if (updatedPost.faqs !== undefined) payload.faqs = updatedPost.faqs;
      if (updatedPost.region !== undefined) payload.region = updatedPost.region;

      const updated = await apiUpdatePost(payload);
      await fetchPosts();
      return updated;
    } catch (e) {
      console.error("Update failed:", e);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    posts,
    loading,
    getPostBySlug,
    addPost,
    deletePost,
    updatePost,
    dynamicPosts: posts,
    refetch: fetchPosts,
  };
};
