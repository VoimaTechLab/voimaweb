const STUDIO = import.meta.env.VITE_SANITY_STUDIO_URL || "http://localhost:3333";
export const studioCreate = (type) => `${STUDIO}/intent/create/template=${type};type=${type}/`;
export const studioEdit = (type, id) => `${STUDIO}/intent/edit/id=${id};type=${type}/`;