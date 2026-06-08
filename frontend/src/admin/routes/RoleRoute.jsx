import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({ allow = [] }) {
  const { hasRole } = useAuth();

  if (!hasRole(...allow)) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <Outlet />;
}