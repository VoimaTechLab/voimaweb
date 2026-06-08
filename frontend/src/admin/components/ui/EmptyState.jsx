import { Inbox } from "lucide-react";
export default function EmptyState({ icon: Icon = Inbox, title = "Nothing here yet", subtitle }) {
  return (
    <div className="grid place-items-center py-16 text-center">
      <Icon className="mb-3 h-10 w-10 text-slate-300" />
      <p className="font-medium text-slate-700">{title}</p>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
    </div>
  );
}