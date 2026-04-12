import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user) return children;

  console.log(user);
  return <Navigate to={"/signin"} />;
}
