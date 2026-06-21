import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import SearchInput from "../components/ui/SearchInput";

import { useDebounce } from "../hooks/useDebounce";
import { useResource } from "../hooks/useResource";

import {
  getMessages,
  replyMessage,
  updateMessageStatus,
} from "../services/messageService";

import { fmtRelative } from "../utils/format";

const FILTERS = ["all", "unread", "read", "replied"];

export default function Messages() {
  const {
    data: messages,
    loading,
    setData,
  } = useResource(getMessages, []);

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replying, setReplying] = useState(false);

  const search = useDebounce(query);

  useEffect(() => {
    if (!selected && messages?.length) {
      setSelected(messages[0]);
    }
  }, [messages, selected]);

  const filtered = useMemo(() => {
    const list = Array.isArray(messages) ? messages : [];

    return list
      .filter((m) => filter === "all" || m.status === filter)
      .filter((m) =>
        [m.name, m.email, m.subject]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }, [messages, filter, search]);

  const updateStatus = async (id, status) => {
    try {
      await updateMessageStatus(id, status);

      setData((prev) =>
        prev.map((m) =>
          m.id === id
            ? {
                ...m,
                status,
              }
            : m
        )
      );

      setSelected((prev) =>
        prev?.id === id
          ? {
              ...prev,
              status,
            }
          : prev
      );
    } catch (err) {
      console.error(err);
    }
  };

  const openMessage = (message) => {
    setSelected(message);

    if (message.status === "unread") {
      updateStatus(message.id, "read");
    }
  };

  const sendReply = async (e) => {
    e.preventDefault();

    if (!selected || !replyText.trim()) return;

    setReplying(true);

    try {
      await replyMessage(selected.id, replyText);

      setData((prev) =>
        prev.map((m) =>
          m.id === selected.id
            ? {
                ...m,
                status: "replied",
              }
            : m
        )
      );

      setSelected((prev) =>
        prev
          ? {
              ...prev,
              status: "replied",
            }
          : prev
      );

      setReplyText("");
      setReplyOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setReplying(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Messages"
        subtitle="Contact form submissions"
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[360px_1fr]">
        {/* Message List */}
        <Card className="flex flex-col overflow-hidden">
          <div className="space-y-3 border-b border-neutral-200 p-3">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Search messages..."
            />

            <div className="flex gap-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${
                    filter === f
                      ? "bg-primary-500 text-white"
                      : "text-neutral-500 hover:bg-neutral-100"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {loading ? (
              <div className="p-4 text-sm text-neutral-500">
                Loading messages...
              </div>
            ) : filtered.length === 0 ? (
              <EmptyState
                icon={Mail}
                title="No messages"
              />
            ) : (
              filtered.map((message) => (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => openMessage(message)}
                  className={`flex w-full flex-col gap-1 border-b border-neutral-100 p-4 text-left hover:bg-neutral-50 ${
                    selected?.id === message.id
                      ? "bg-neutral-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        message.status === "unread"
                          ? "font-semibold text-neutral-900"
                          : "text-neutral-700"
                      }`}
                    >
                      {message.name}
                    </span>

                    <span className="text-xs text-neutral-400">
                      {fmtRelative(message.createdAt)}
                    </span>
                  </div>

                  <span className="truncate text-sm text-neutral-500">
                    {message.subject}
                  </span>

                  <Badge status={message.status} />
                </button>
              ))
            )}
          </div>
        </Card>

        {/* Message Detail */}
        <Card className="p-6">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {selected.subject}
                  </h2>

                  <p className="mt-1 text-sm text-neutral-500">
                    {selected.name} ·{" "}
                    <a
                      href={`mailto:${selected.email}`}
                      className="text-primary-600"
                    >
                      {selected.email}
                    </a>
                  </p>
                </div>

                <Badge status={selected.status} />
              </div>

              <p className="mt-6 whitespace-pre-wrap leading-relaxed text-neutral-700">
                {selected.message}
              </p>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-neutral-200 pt-5">
                <Button
                  variant="secondary"
                  onClick={() =>
                    updateStatus(selected.id, "read")
                  }
                >
                  Mark read
                </Button>

                <Button
                  onClick={() =>
                    updateStatus(selected.id, "replied")
                  }
                >
                  Mark replied
                </Button>

                <Button
                  onClick={() => {
                    setReplyText("");
                    setReplyOpen(true);
                  }}
                >
                  Reply
                </Button>
              </div>
            </motion.div>
          ) : (
            <EmptyState
              icon={Mail}
              title="Select a message"
            />
          )}
        </Card>
      </div>

      <Modal
        open={replyOpen}
        onClose={() => {
          setReplyOpen(false);
          setReplyText("");
        }}
        title={`Reply to ${selected?.name || ""}`}
        width="max-w-lg"
      >
        <form onSubmit={sendReply} className="space-y-4">
          <div className="rounded-lg bg-neutral-50 p-3 text-sm text-neutral-600">
            <p className="font-medium text-neutral-700">
              Re: {selected?.subject}
            </p>

            <p className="mt-1 line-clamp-3">
              {selected?.message}
            </p>
          </div>

          <textarea
            required
            rows={7}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={`Write your reply to ${
              selected?.email || "the sender"
            }...`}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-primary-500"
          />

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setReplyOpen(false);
                setReplyText("");
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={replying}>
              {replying ? "Sending..." : "Send Reply"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}