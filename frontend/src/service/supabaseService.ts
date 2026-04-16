import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL;

if (!SUPABASE_KEY)
  throw new Error("Missing .env varible SUPABASE_PUBLISHABLE_KEY");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

export async function getGroups() {
  try {
    const { data, error } = await supabase.from("groups").select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error.message);

    throw new Error(`Failed to load groups: ${error.message}`);
  }
}

export async function createGroup({ name, userId }) {
  try {
    const { data, error } = await supabase
      .from("groups")
      .insert({ name, creator_id: userId })
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(`Failed to create an group: ${err.message}`);
    throw new Error("Failed to create group: " + err.message);
  }
}
