import clsx from "clsx";

const styles = {
  // Status styles
  unread: "bg-primary-50 text-primary-700",
  read: "bg-neutral-100 text-neutral-600",
  replied: "bg-success-50 text-success-500",
  draft: "bg-warning-50 text-warning-500",
  published: "bg-success-50 text-success-500",
  pending: "bg-warning-50 text-warning-500",
  approved: "bg-success-50 text-success-500",
  rejected: "bg-danger-50 text-danger-500",
  
  // Role styles - unique colors for each category
  patient: "bg-primary-50 text-primary-700 font-semibold",
  caregiver: "bg-blue-50 text-blue-700 font-semibold",
  "health worker": "bg-purple-50 text-purple-700 font-semibold",
  volunteer: "bg-amber-50 text-amber-700 font-semibold",
  
  default: "bg-neutral-100 text-neutral-600",
};

export default function Badge({ status, children }) {
  const displayText = children || status;
  const normalizedStatus = status?.toLowerCase();
  const badgeStyle = styles[normalizedStatus] || styles.default;
  
  return (
    <span className={clsx("inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", badgeStyle)}>
      {displayText}
    </span>
  );
}