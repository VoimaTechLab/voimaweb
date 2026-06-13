// Centralized RBAC. Resource -> roles allowed.
export const PERMISSIONS = {
  messages:   ["SUPER_ADMIN", "ADMIN"],
  newsletter: ["SUPER_ADMIN", "ADMIN"],
  waitlist:   ["SUPER_ADMIN", "ADMIN"],
  stories:    ["SUPER_ADMIN", "EDITOR"],
  blog:       ["SUPER_ADMIN", "EDITOR"],
  events:     ["SUPER_ADMIN", "EDITOR"],
  gallery:    ["SUPER_ADMIN", "EDITOR"],
  admins:     ["SUPER_ADMIN"],
  settings:   ["SUPER_ADMIN", "ADMIN"],
  dashboard:  ["SUPER_ADMIN", "ADMIN", "EDITOR"],
};

export const can = (role, resource) =>
  (PERMISSIONS[resource] || []).includes(role);