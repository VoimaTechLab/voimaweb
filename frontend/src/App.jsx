import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoaderAdmin from "./admin/components/PageLoader";
import { AuthProvider } from "./admin/context/AuthContext";
import PublicRoutes from "./publicSite/routes/AppRoutes";

// Admin is lazy-loaded →
const AdminRoutes = lazy(() => import("./admin/routes/AdminRoutes"));

export default function App() {
  return (
    <Routes>
      {/* ADMIN — wrapped in AuthProvider, lives under /admin/* */}
      <Route
        path="/admin/*"
        element={
          <AuthProvider>
            <Suspense fallback={<PageLoaderAdmin />}>
              <AdminRoutes />
            </Suspense>
          </AuthProvider>
        }
      />

      {/* PUBLIC — everything else */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}