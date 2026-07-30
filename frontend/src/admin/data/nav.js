import { Calendar, FileText, Heart, LayoutDashboard, Mail, Send, Settings, Users } from "lucide-react";

export const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/newsletter", label: "Newsletter", icon: Send },
  { to: "/admin/waitlist", label: "Waitlist", icon: Users },
  { to: "/admin/blog", label: "Blog", icon: FileText },
  { to: "/admin/stories", label: "Stories", icon: Heart },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/settings", label: "Settings", icon: Settings, role: "SUPER_ADMIN" },
];