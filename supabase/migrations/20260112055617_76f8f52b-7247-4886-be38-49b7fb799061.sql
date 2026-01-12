-- Step 1: Drop the existing primary key constraint
ALTER TABLE blog_post DROP CONSTRAINT IF EXISTS blog_post_pkey;

-- Step 2: Rename old id column
ALTER TABLE blog_post RENAME COLUMN id TO old_id;

-- Step 3: Add new UUID column as primary key
ALTER TABLE blog_post ADD COLUMN id UUID DEFAULT gen_random_uuid() NOT NULL;

-- Step 4: Set the new UUID column as primary key
ALTER TABLE blog_post ADD PRIMARY KEY (id);

-- Step 5: Drop the old integer id column
ALTER TABLE blog_post DROP COLUMN old_id;