import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL;

console.log(import.meta.env.VITE_SUPABASE_PROJECT_URL);
if (!SUPABASE_KEY)
  throw new Error("Missing .env varible SUPABASE_PUBLISHABLE_KEY");

const supabase: unknown = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
