// src/api/endpoints.js

export const ENDPOINTS = {
  // Newsletter
  NEWSLETTER_SUBSCRIBE: '/newsletter/subscribe',

  // Contact
  CONTACT_SUBMIT: '/contact',

  // blog
  NEWS_LIST:    '/blog',
  NEWS_DETAIL:  (slug) => `/blog/${slug}`,

  // Events
  EVENTS_LIST:   '/events',
  EVENTS_DETAIL: (id) => `/events/${id}`,

  // Programs
  PROGRAMS_LIST:   '/programs',
  PROGRAMS_DETAIL: (slug) => `/programs/${slug}`,

  // Volunteer
  VOLUNTEER_APPLY: '/volunteer/apply',
};