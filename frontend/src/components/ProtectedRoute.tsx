import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { session } = useAuth();

  if (session) return children;

  return <Navigate to={"/signin"} />;
}
