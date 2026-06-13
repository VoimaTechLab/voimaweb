import { Calendar, MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";
import PageHeader from "../components/ui/PageHeader";
import { eventsService } from "../services/dataService";
import { fmtDate } from "../utils/format";

const empty = {
  title: "",
  description: "",
  location: "",
  eventDate: "",
  status: "draft",
};

const input =
  "w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500";

export default function EventsManager() {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    eventsService.list().then(setEvents);
  }, []);

  const save = async (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = await eventsService.update(editingId, form);

      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingId ? updated : event
        )
      );
    } else {
      const created = await eventsService.create(form);

      setEvents((prev) => [created, ...prev]);
    }

    setForm(empty);
    setEditingId(null);
    setOpen(false);
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    await eventsService.remove(id);

    setEvents((prev) =>
      prev.filter((event) => event.id !== id)
    );
  };

  const edit = (event) => {
    setForm({
      title: event.title,
      description: event.description,
      location: event.location,
      eventDate: event.eventDate?.slice(0, 10),
      status: event.status,
    });

    setEditingId(event.id);
    setOpen(true);
  };

  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Manage community events"
        action={
          <Button
            onClick={() => {
              setForm(empty);
              setEditingId(null);
              setOpen(true);
            }}
          >
            <Plus className="h-4 w-4" />
            New Event
          </Button>
        }
      />

      {events.length === 0 ? (
        <Card>
          <EmptyState
            icon={Calendar}
            title="No events yet"
          />
        </Card>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {events.map((ev) => (
            <Card key={ev.id} className="p-5">
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-neutral-900">
                  {ev.title}
                </h3>

                <Badge status={ev.status} />
              </div>

              <p className="mt-2 text-sm text-neutral-500">
                {ev.description}
              </p>

              <div className="mt-3 flex flex-col gap-1 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {fmtDate(ev.eventDate)}
                </span>

                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {ev.location}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => edit(ev)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>

                <Button
                  variant="danger"
                  onClick={() => remove(ev.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={
          editingId ? "Edit Event" : "Create Event"
        }
      >
        <form
          onSubmit={save}
          className="space-y-4"
        >
          <input
            className={input}
            placeholder="Event Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            required
          />

          <textarea
            rows={4}
            className={input}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            required
          />

          <input
            className={input}
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value,
              })
            }
            required
          />

          <input
            type="date"
            className={input}
            value={form.eventDate}
            onChange={(e) =>
              setForm({
                ...form,
                eventDate: e.target.value,
              })
            }
            required
          />

          <select
            className={input}
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option value="draft">
              Draft
            </option>

            <option value="published">
              Published
            </option>
          </select>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">
              {editingId
                ? "Update Event"
                : "Create Event"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

