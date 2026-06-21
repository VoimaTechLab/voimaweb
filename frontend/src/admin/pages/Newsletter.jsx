import { Download, Mail, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";
import StatCard from "../components/ui/StatCard";

import { useDebounce } from "../hooks/useDebounce";
import { subscribersService } from "../services/dataService";

import { exportToCsv } from "../utils/exportCsv";
import { fmtDate } from "../utils/format";
import { monthlyStats } from "../utils/growth";

export default function Newsletter() {
  const [subs, setSubs] = useState([]);
  const [query, setQuery] = useState("");

  const [compose, setCompose] = useState(false);
  const [draft, setDraft] = useState({
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  const search = useDebounce(query);
  const { thisMonth, growth } = monthlyStats(subs, "subscribedAt");

  useEffect(() => {
    subscribersService.list().then(setSubs);
  }, []);

  const filtered = useMemo(() => {
    return subs.filter((s) =>
      s.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [subs, search]);

  async function handleSend(e) {
    e.preventDefault();

    if (!draft.subject.trim() || !draft.message.trim()) {
      setResult("Please enter both a subject and a message.");
      return;
    }

    setSending(true);
    setResult("");

    try {
      const { sent } = await subscribersService.broadcast(draft);

      setResult(`Newsletter sent successfully to ${sent} subscriber(s).`);

      setDraft({
        subject: "",
        message: "",
      });

      // Close after a short delay so the user can see the success message.
      setTimeout(() => {
        setCompose(false);
        setResult("");
      }, 1500);
    } catch (err) {
      setResult("Failed to send newsletter.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <PageHeader
        title="Newsletter"
        subtitle="Manage your subscribers"
        action={
          <div className="flex gap-2">
            <Button onClick={() => setCompose(true)}>
              <Mail className="h-4 w-4" />
              Compose
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                exportToCsv("subscribers.csv", subs)
              }
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        }
      />

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        <StatCard
          label="Total Subscribers"
          value={subs.length}
          icon={Send}
        />

        <StatCard
          label="This Month"
          value={thisMonth}
          trend={growth}
        />

        <StatCard
          label="Growth Rate"
          value={`${growth}%`}
          trend={growth}
        />
      </div>

      <Card>
        <div className="border-b border-slate-100 p-3">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search by email..."
          />
        </div>

        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">
                Email
              </th>
              <th className="px-5 py-3 font-medium">
                Subscribed
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((s) => (
                <tr
                  key={s.id}
                  className="border-t border-slate-50 hover:bg-slate-50"
                >
                  <td className="px-5 py-3 text-slate-700">
                    {s.email}
                  </td>

                  <td className="px-5 py-3 text-slate-500">
                    {fmtDate(s.subscribedAt)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="px-5 py-8 text-center text-slate-500"
                >
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      <Modal
        open={compose}
        onClose={() => {
          setCompose(false);
          setResult("");
        }}
        title="Compose Newsletter"
      >
        <form
          onSubmit={handleSend}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium">
              Subject
            </label>

            <input
              type="text"
              value={draft.subject}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  subject: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[#BC1D26]"
              placeholder="Newsletter subject"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Message
            </label>

            <textarea
              rows={8}
              value={draft.message}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-[#BC1D26]"
              placeholder="Write your newsletter..."
            />
          </div>

          {result && (
            <div className="rounded-md bg-slate-50 p-3 text-sm text-slate-700">
              {result}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setCompose(false);
                setResult("");
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Newsletter"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}