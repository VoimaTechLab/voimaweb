import { Calendar, MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import PageHeader from "../components/ui/PageHeader";
import { eventsService } from "../services/dataService";
import { studioCreate, studioEdit } from "../utils/studio";

export default function EventsManager() {
  const [events, setEvents] = useState([]);

  useEffect(() => { eventsService.list().then(setEvents); }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    await eventsService.remove(id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      <PageHeader
        title="Events"
        subtitle="Events are edited in Sanity Studio"
        action={
          <a href={studioCreate("event")} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white">
            <Plus className="h-4 w-4" /> New Event
          </a>
        }
      />

      {events.length === 0 ? (
        <Card><EmptyState icon={Calendar} title="No events yet" /></Card>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {events.map((ev) => (
            <Card key={ev.id} className="p-5">
              <h3 className="font-medium text-neutral-900">{ev.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{ev.description}</p>

              <div className="mt-3 flex flex-col gap-1 text-xs text-neutral-400">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{ev.date}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{ev.location}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <a href={studioEdit("event", ev.id)} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                  <Pencil className="h-4 w-4" /> Edit
                </a>
                <Button variant="danger" onClick={() => remove(ev.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}