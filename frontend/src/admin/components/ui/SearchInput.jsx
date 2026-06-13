import { Search } from "lucide-react";

export default function SearchInput({ value, onChange, placeholder = "Search…" }) {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary-500"
      />
    </div>
  );
}