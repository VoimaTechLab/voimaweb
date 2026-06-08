import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="System and administrator settings"
      />

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Settings
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Settings management will be connected to the backend
          once authentication and role management are completed.
        </p>
      </Card>
    </div>
  );
}

