import {
    Calendar,
    FileText,
    LayoutDashboard,
    ListChecks,
    LogOut,
    Mail,
    MessagesSquare,
    Send,
    Settings,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const nav = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/newsletter", label: "Newsletter", icon: Send },
  { to: "/admin/waitlist", label: "Waitlist", icon: ListChecks },
  { to: "/admin/blog", label: "Blog", icon: FileText },
  { to: "/admin/stories", label: "Stories", icon: MessagesSquare },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/settings", label: "Settings", icon: Settings, role: ["SUPER_ADMIN"] },
];

export default function AdminLayout() {
  const { admin, logout, hasRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="flex w-60 flex-col border-r border-slate-200 bg-white">
        <div className="px-5 py-5 text-2xl font-semibold font-display text-[#BC1d26]">Voima</div>

        <nav className="flex-1 space-y-1 px-3">
          {nav
            .filter((i) => !i.role || hasRole(...i.role))
            .map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
        </nav>

        <div className="border-t border-slate-200 p-3">
          <div className="px-2 pb-2 text-xs text-slate-500">
            {admin?.name} · {admin?.role}
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}