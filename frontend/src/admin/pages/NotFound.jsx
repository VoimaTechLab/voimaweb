import { ArrowLeft, Compass, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/20">
          <Compass className="text-white" size={44} strokeWidth={1.5} />
        </div>
        <span className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-primary-600 shadow-md ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
          404
        </span>
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-slate-500 dark:text-slate-400">
        The page you're looking for doesn't exist or may have been moved. Let's
        get you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ArrowLeft size={16} /> Go Back
        </button>
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
        >
          <Home size={16} /> Back to Dashboard
        </Link>
      </div>

      <p className="mt-12 text-xs font-medium uppercase tracking-wider text-slate-400">
        Voima · Admin
      </p>
    </div>
  );
}