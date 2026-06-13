import clsx from "clsx";

const variants = {
  primary: "bg-primary-500 text-white hover:bg-primary-600",
  secondary: "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50",
  danger: "bg-danger-500 text-white hover:bg-red-700",
  success: "bg-success-500 text-white hover:bg-green-600",
  ghost: "text-neutral-600 hover:bg-neutral-100",
};

export default function Button({ variant = "primary", className, children, ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}