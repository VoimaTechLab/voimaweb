import {
    Download,
    HeartHandshake,
    Trash2,
} from "lucide-react";
import {
    useEffect,
    useMemo,
    useState,
} from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

import { useDebounce } from "../hooks/useDebounce";
import { volunteerService } from "../services/volunteerService";
import { exportToCsv } from "../utils/exportCsv";
import { fmtDate } from "../utils/format";

const statusColors = {
  new: "#F47B3A",
  reviewing: "#3B82F6",
  accepted: "#22C55E",
  rejected: "#EF4444",
};

export default function Volunteers() {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const search = useDebounce(query);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data =
      await volunteerService.list();

    setRows(data);
  };

  const statuses = useMemo(
    () => [
      "all",
      ...new Set(rows.map((r) => r.status)),
    ],
    [rows]
  );

  const filtered = useMemo(() => {
    return rows
      .filter(
        (r) =>
          status === "all" ||
          r.status === status
      )
      .filter((r) =>
        [
          r.fullName,
          r.email,
          r.motivation,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }, [rows, search, status]);

  const updateStatus = async (
    id,
    value
  ) => {
    await volunteerService.update(
      id,
      {
        status: value,
      }
    );

    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: value }
          : r
      )
    );
  };

  const remove = async (id) => {
    const confirmed =
      window.confirm(
        "Delete this volunteer application?"
      );

    if (!confirmed) return;

    await volunteerService.remove(id);

    setRows((prev) =>
      prev.filter((r) => r.id !== id)
    );
  };

  return (
    <div>
      <PageHeader
        title="Volunteers"
        subtitle="Manage volunteer applications"
        action={
          <Button
            variant="secondary"
            onClick={() =>
              exportToCsv(
                "volunteers.csv",
                rows
              )
            }
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          label="Total"
          value={rows.length}
          icon={HeartHandshake}
        />

        {statuses
          .filter((s) => s !== "all")
          .map((s) => (
            <StatCard
              key={s}
              label={s}
              value={
                rows.filter(
                  (r) => r.status === s
                ).length
              }
              icon={() => (
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    background:
                      statusColors[s],
                  }}
                />
              )}
            />
          ))}
      </div>

      <Card>
        <div className="flex flex-wrap items-center gap-3 border-b border-neutral-200 p-3">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search volunteer..."
          />

          <div className="flex gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() =>
                  setStatus(s)
                }
                className={`rounded-md px-3 py-1 text-xs font-medium ${
                  status === s
                    ? "bg-primary-500 text-white"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-neutral-400">
              <tr>
                <th className="px-5 py-3">
                  Name
                </th>
                <th className="px-5 py-3">
                  Email
                </th>
                <th className="px-5 py-3">
                  Motivation
                </th>
                <th className="px-5 py-3">
                  Status
                </th>
                <th className="px-5 py-3">
                  Applied
                </th>
                <th className="px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-neutral-100 hover:bg-neutral-50"
                >
                  <td className="px-5 py-3 font-medium text-neutral-800">
                    {r.fullName}
                  </td>

                  <td className="px-5 py-3 text-neutral-600">
                    {r.email}
                  </td>

                  <td className="max-w-sm px-5 py-3 text-neutral-600">
                    <p className="line-clamp-3">
                      {r.motivation}
                    </p>
                  </td>

                  <td className="px-5 py-3">
                    <select
                      value={r.status}
                      onChange={(e) =>
                        updateStatus(
                          r.id,
                          e.target.value
                        )
                      }
                      className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="reviewing">
                        Reviewing
                      </option>

                      <option value="accepted">
                        Accepted
                      </option>

                      <option value="rejected">
                        Rejected
                      </option>
                    </select>
                  </td>

                  <td className="px-5 py-3 text-neutral-500">
                    {fmtDate(
                      r.createdAt
                    )}
                  </td>

                  <td className="px-5 py-3">
                    <button
                      onClick={() =>
                        remove(r.id)
                      }
                      className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}

              {!filtered.length && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-neutral-400"
                  >
                    No volunteer applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}