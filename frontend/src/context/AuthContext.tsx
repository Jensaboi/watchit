import { createContext, useContext, useState } from "react";
import supabase from "../service/supabaseService";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
    if (event === "INITIAL_SESSION") {
      // handle initial session
    } else if (event === "SIGNED_IN") {
      // handle sign in event
    } else if (event === "SIGNED_OUT") {
      // handle sign out event
    } else if (event === "PASSWORD_RECOVERY") {
      // handle password recovery event
    } else if (event === "TOKEN_REFRESHED") {
      // handle token refreshed event
    } else if (event === "USER_UPDATED") {
      // handle user updated event
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

      if (error) throw error;

      setUser(data);

      return data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to sign up user...", { cause: err });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUpUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
