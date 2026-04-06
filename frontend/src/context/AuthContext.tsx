import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);
