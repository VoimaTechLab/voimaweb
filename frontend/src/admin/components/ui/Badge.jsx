import clsx from "clsx";

const styles = {
  unread: "bg-blue-50 text-blue-700",
  read: "bg-slate-100 text-slate-600",
  replied: "bg-emerald-50 text-emerald-700",
  draft: "bg-amber-50 text-amber-700",
  published: "bg-emerald-50 text-emerald-700",
  pending: "bg-amber-50 text-amber-700",
  approved: "bg-emerald-50 text-emerald-700",
  rejected: "bg-red-50 text-red-700",
  default: "bg-slate-100 text-slate-600",
};

export default function Badge({ status, children }) {
  return (
    <span className={clsx("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", styles[status] || styles.default)}>
      {children || status}
    </span>
  );
}