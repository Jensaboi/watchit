import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../service/supabaseService";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  const user = session?.user ?? null;

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "INITIAL_SESSION") {
      // handle initial session
      console.log(event);
      console.log("sess", session);
    } else if (event === "SIGNED_OUT") {
      console.log(event);
      console.log("sess", session);
      setSession(null);
    } else {
      console.log(event);
      console.log("sess", session);
      setSession(session);
    }
  });

  async function signUpUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error(`Supabase sign up error: ${error.message}`);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err) {
      return {
        success: false,
        error: `Unexpected error: ${err?.message ?? ""}`,
      };
    }
  }

  async function signInUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(`Supabase sign in error: ${error.message}`);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err) {
      console.error(`Unexpected error occured: ${err?.message ?? ""}`);
      return { success: false, error: err?.message };
    }
  }

  async function signOutUser() {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) return { success: false, error: error.message };

      return { success: true };
    } catch (err) {
      return { success: false, error: err?.message };
    }
  }

  useEffect(() => {
    async function loadSession() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(`Supabase load session error: ${error.message}`);
        return;
      }

      const { session } = data;

      if (session) setSession(data);
    }
    loadSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, user, signUpUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
