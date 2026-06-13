import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#BC1D26] border-r-[#BC1D26] animate-spin"></div>
          </div>
          <p className="text-[#BC1D26] font-semibold text-lg">VOIMA ADMIN</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // remember where they wanted to go
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}