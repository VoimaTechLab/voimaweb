import clsx from "clsx";
export default function Card({ className, children, ...props }) {
  return (
    <div
      className={clsx("rounded-xl border border-slate-200 bg-white", className)}
      {...props}
    >
      {children}
    </div>
  );
}