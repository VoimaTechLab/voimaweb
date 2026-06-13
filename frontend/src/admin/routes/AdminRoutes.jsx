import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import PageLoader from "../components/PageLoader";

const Login = lazy(() => import("../pages/Login"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Messages = lazy(() => import("../pages/Messages"));
const Newsletter = lazy(() => import("../pages/Newsletter"));
const Waitlist = lazy(() => import("../pages/Waitlist"));
const BlogManager = lazy(() => import("../pages/BlogManager"));
const Stories = lazy(() => import("../pages/Stories"));
const EventsManager = lazy(() => import("../pages/EventsManager"));
const Settings = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AdminRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* PUBLIC inside admin */}
        <Route path="login" element={<Login />} />

        {/* PROTECTED (must be logged in) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="messages" element={<Messages />} />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path="waitlist" element={<Waitlist />} />
            <Route path="blog" element={<BlogManager />} />
            <Route path="stories" element={<Stories />} />
            <Route path="events" element={<EventsManager />} />

            {/* ROLE-RESTRICTED: only Super Admin can manage accounts */}
            <Route element={<RoleRoute allow={["SUPER_ADMIN"]} />}>
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Route>


       {/* For Deployment */}
       {/* <Route
        path="*"
        element={<Navigate to="/admin/dashboard" replace />}
        />*/}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}