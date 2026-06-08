import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-slate-900">
          404
        </h1>

        <p className="mt-4 text-slate-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/admin/dashboard"
          className="
            mt-6
            inline-flex
            rounded-lg
            bg-[#BC1D26]
            px-5
            py-3
            text-sm
            font-medium
            text-white
          "
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

