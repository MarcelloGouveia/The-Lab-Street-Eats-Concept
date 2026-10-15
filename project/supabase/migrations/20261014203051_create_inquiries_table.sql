/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries` — stores submissions from the "The Lab Street Eats" contact/inquiry form
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, nullable) — optional phone number
  - `subject` (text, not null) — inquiry type: "Catering", "General Question", "Feedback", "Other"
  - `message` (text, not null) — the inquiry message body
  - `created_at` (timestamptz, default now()) — submission timestamp
2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT only (public contact form — no sign-in required).
- No SELECT/UPDATE/DELETE policies for anon/authenticated — submissions are write-only from the frontend.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL DEFAULT 'General Question',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);