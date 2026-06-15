import {
  Bell,
  Building2, Globe,
  Loader2,
  Lock,
  Moon,
  Save,
  Search,
  Share2,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  changePassword,
  getSettings, updateSettings,
} from "../services/settingsService";

const TABS = [
  { id: "general", label: "General", icon: Building2 },
  { id: "social", label: "Social Links", icon: Share2 },
  { id: "seo", label: "SEO Defaults", icon: Search },
  { id: "preferences", label: "Preferences", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
];

const Field = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium text-slate-700">
      {label}
    </label>
    <input
      {...props}
      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
    />
  </div>
);

const Card = ({ icon: Icon, title, desc, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-5 flex items-start gap-3">
      <span className="rounded-xl bg-primary-50 p-2.5 text-primary-500">
        <Icon size={18} />
      </span>

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        {desc && (
          <p className="text-sm text-slate-500">
            {desc}
          </p>
        )}
      </div>
    </div>

    {children}
  </div>
);

export default function Settings() {
  const { user } = useAuth();
  const [tab, setTab] = useState("general");
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  // Dark mode (Tailwind 'class' strategy)
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // Password form
  const [pw, setPw] = useState({ currentPassword: "", newPassword: "", confirm: "" });
  const [pwSaving, setPwSaving] = useState(false);

  useEffect(() => {
    getSettings()
      .then(setForm)
      .finally(() => setLoading(false));
  }, []);

  if (user?.role !== "SUPER_ADMIN") {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center text-center">
        <Lock className="mb-3 text-slate-400" size={40} />
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
          Restricted
        </h2>
        <p className="text-sm text-slate-500">Only Super Admins can access settings.</p>
      </div>
    );
  }

  if (loading || !form)
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-primary-500" />
      </div>
    );

  const set = (section, key, value) =>
    setForm((f) => ({ ...f, [section]: { ...f[section], [key]: value } }));

  const showToast = (m) => { setToast(m); setTimeout(() => setToast(""), 2500); };

  const handleSave = async () => {
    setSaving(true);
    try {
      const saved = await updateSettings(form);
      setForm(saved);
      showToast("Settings saved");
    } catch (e) {
      showToast(e?.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const toggleDark = () => {
    const root = document.documentElement;
    const next = !dark;
    root.classList.toggle("dark", next);
    localStorage.setItem("voima_theme", next ? "dark" : "light");
    setDark(next);
  };

  const handlePassword = async () => {
    if (pw.newPassword !== pw.confirm) return showToast("Passwords do not match");
    if (pw.newPassword.length < 8) return showToast("Min 8 characters");
    setPwSaving(true);
    try {
      await changePassword({
        currentPassword: pw.currentPassword,
        newPassword: pw.newPassword,
      });
      setPw({ currentPassword: "", newPassword: "", confirm: "" });
      showToast("Password updated");
    } catch (e) {
      showToast(e?.message || "Failed to update password");
    } finally {
      setPwSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-neutral-900">Settings</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage your organization, branding, and account.
          </p>
        </div>
        {tab !== "security" && (
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-600 disabled:opacity-60"
            >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            Save Changes
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-white p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
              tab === t.id
                ? "bg-primary-500 text-white"
                : "text-slate-600 hover:bg-primary-50"
            }`}
          >
            <t.icon size={15} /> {t.label}
          </button>
        ))}
      </div>

      {tab === "general" && (
        <Card icon={Building2} title="General" desc="Core organization details.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Site Name" value={form.general.siteName || ""}
              onChange={(e) => set("general", "siteName", e.target.value)} />
            <Field label="Contact Email" type="email" value={form.general.contactEmail || ""}
              onChange={(e) => set("general", "contactEmail", e.target.value)} />
            <Field label="Organization Phone" value={form.general.phone || ""}
              onChange={(e) => set("general", "phone", e.target.value)} />
            <Field label="Address" value={form.general.address || ""}
              onChange={(e) => set("general", "address", e.target.value)} />
          </div>
        </Card>
      )}

      {tab === "social" && (
        <Card icon={Globe} title="Social Links" desc="Public profiles shown on the website.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Facebook" value={form.social.facebook || ""}
              onChange={(e) => set("social", "facebook", e.target.value)} />
            <Field label="Instagram" value={form.social.instagram || ""}
              onChange={(e) => set("social", "instagram", e.target.value)} />
            <Field label="LinkedIn" value={form.social.linkedin || ""}
              onChange={(e) => set("social", "linkedin", e.target.value)} />
            <Field label="X (Twitter)" value={form.social.x || ""}
              onChange={(e) => set("social", "x", e.target.value)} />
          </div>
        </Card>
      )}

      {tab === "seo" && (
        <Card icon={Search} title="SEO Defaults" desc="Fallback meta tags for public pages.">
          <div className="space-y-4">
            <Field label="Meta Title" value={form.seo.metaTitle || ""}
              onChange={(e) => set("seo", "metaTitle", e.target.value)} />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={form.seo.metaDescription || ""}
                onChange={(e) => set("seo", "metaDescription", e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>
        </Card>
      )}

      {tab === "preferences" && (
        <div className="space-y-6">
          <Card icon={dark ? Moon : Sun} title="Appearance" desc="Theme preference for the dashboard.">
            <button
              onClick={toggleDark}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700"
            >
              <span className="text-sm font-medium text-slate-70">
                Dark Mode
              </span>
                <span
                  className={`relative h-6 w-11 rounded-full transition ${
                    dark ? "bg-primary-500" : "bg-slate-300"
                  }`}
                >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${dark ? "left-[22px]" : "left-0.5"}`} />
              </span>
            </button>
          </Card>

          <Card icon={Bell} title="Notifications" desc="Email alerts for new activity.">
            <div className="space-y-3">
              {[
                ["newMessage", "New contact message"],
                ["newWaitlist", "New waitlist signup"],
                ["newStory", "New community story"],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700">
                  <span className="text-sm text-slate-700">{label}</span>
                  <input
                    type="checkbox"
                    checked={!!form.preferences?.notifications?.[key]}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        preferences: {
                          ...f.preferences,
                          notifications: {
                            ...f.preferences?.notifications,
                            [key]: e.target.checked,
                          },
                        },
                      }))
                    }
                   className="h-4 w-4 rounded accent-primary-500"
                  />
                </label>
              ))}
            </div>
          </Card>
        </div>
      )}

      {tab === "security" && (
        <div className="space-y-6">
          <Card icon={Lock} title="Change Password" desc="Update your account password.">
            <div className="grid gap-4 sm:max-w-md">
              <Field label="Current Password" type="password" value={pw.currentPassword}
                onChange={(e) => setPw({ ...pw, currentPassword: e.target.value })} />
              <Field label="New Password" type="password" value={pw.newPassword}
                onChange={(e) => setPw({ ...pw, newPassword: e.target.value })} />
              <Field label="Confirm New Password" type="password" value={pw.confirm}
                onChange={(e) => setPw({ ...pw, confirm: e.target.value })} />
              <button
                onClick={handlePassword}
                disabled={pwSaving}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 disabled:opacity-60"
              >
                {pwSaving ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
                Update Password
              </button>
            </div>
          </Card>

          <Card icon={Globe} title="Session Information" desc="Your active session details.">
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                <p className="text-slate-500">Signed in as</p>
                <p className="font-medium text-slate-900 dark:text-slate-100">{user?.email}</p>
              </div>
              <div className="rounded-xl bg-primary-50 p-3">
                <p className="text-slate-500">Role</p>
                <p className="font-medium text-slate-900 dark:text-slate-100">{user?.role}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-primary-500 px-4 py-3 text-sm font-medium text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}