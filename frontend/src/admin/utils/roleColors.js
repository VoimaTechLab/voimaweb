export const ROLE_COLORS = {
  "Person Living With Sickle Cell": "#BC1D26",
  "Parent / Guardian": "#F47B3A",
  "Healthcare Professional": "#1D9E75",
  "Researcher": "#2563EB",
  "Volunteer": "#7C3AED",
  "Supporter": "#0891B2",
  // mock-data roles too
  Patient: "#BC1D26",
  Caregiver: "#F47B3A",
  "Health Worker": "#1D9E75",
};
export const roleColor = (role) => ROLE_COLORS[role] || "#64748B";