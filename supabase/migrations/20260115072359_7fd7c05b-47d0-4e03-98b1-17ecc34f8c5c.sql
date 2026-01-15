-- Add region column to blog_post table for country-specific filtering
ALTER TABLE public.blog_post 
ADD COLUMN region text DEFAULT 'global';

-- Update all existing posts to 'global' (will show for Singapore and UAE)
UPDATE public.blog_post SET region = 'global' WHERE region IS NULL;

-- Add a comment explaining the region values
COMMENT ON COLUMN public.blog_post.region IS 'Region for filtering: global (SG/UAE), australia, or all';