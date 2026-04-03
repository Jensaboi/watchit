import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = import.meta.env.SUPABASE_PUBLISHABLE_KEY;
const SUPABASE_URL = import.meta.env.SUPABASE_PROJECT_URL;

if (!SUPABASE_KEY)
  throw new Error("Missing .env varible SUPABASE_PUBLISHABLE_KEY");

const supabase: unknown = createClient(SUPABASE_KEY, SUPABASE_URL);

export default supabase;
