import {
  Calendar,
  FileText,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Mail,
  Send,
  Settings
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const nav = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/newsletter", label: "Newsletter", icon: Send },
  { to: "/admin/waitlist", label: "Waitlist", icon: ListChecks },
  { to: "/admin/blog", label: "Blog", icon: FileText },
 /* { to: "/admin/stories", label: "Stories", icon: MessagesSquare }, */
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/settings", label: "Settings", icon: Settings, role: ["SUPER_ADMIN"] },
];

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  console.log("AUTH DATA:", useAuth());
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="flex w-60 flex-col border-r border-neutral-200 bg-white">
        <div className="px-5 py-5 text-2xl font-semibold font-display text-primary-500">Voima</div>

        <nav className="flex-1 space-y-1 px-3">
          {nav
            .filter((i) => {
              if (!i.role) return true;
              return i.role.includes(admin?.role);
            })
            .map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
        </nav>

        <div className="border-t border-neutral-200 p-3">
          <div className="px-2 pb-2 text-xs text-neutral-500">
            {admin?.name} · {admin?.role}
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-neutral-500 hover:bg-neutral-100 hover:text-danger-500"
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