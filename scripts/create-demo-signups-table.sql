-- Create demo_signups table
CREATE TABLE IF NOT EXISTS demo_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  shop_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_signups_email ON demo_signups(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_demo_signups_created_at ON demo_signups(created_at DESC);
