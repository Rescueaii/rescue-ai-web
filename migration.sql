-- Run this in Supabase SQL Editor
ALTER TABLE cases 
ADD COLUMN IF NOT EXISTS location_text TEXT,
ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION,
ADD COLUMN IF NOT EXISTS location_source TEXT DEFAULT 'fallback';

-- Ensure updated_at exists
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='cases' AND column_name='updated_at') THEN
        ALTER TABLE cases ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;
