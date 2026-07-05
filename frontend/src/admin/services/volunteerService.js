import { api } from "./apiClient";

export const volunteerService = {
  apply: (data) =>
    api.post("/volunteers", data),

  list: () =>
    api.get("/volunteers")
      .then((r) => r.data.data),

  update: (id, data) =>
    api.patch(
      `/volunteers/${id}`,
      data
    ),

  remove: (id) =>
    api.delete(`/volunteers/${id}`),
};