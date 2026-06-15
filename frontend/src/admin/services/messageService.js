import { USE_MOCK } from "../config";
import { mockMessages } from "../data/mockData";
import { api } from "./apiClient";
import { safeGet, safeMutate } from "./http";

export const getMessages = (params) =>
  USE_MOCK ? Promise.resolve(mockMessages) : safeGet("/contact", mockMessages, params);

export const updateMessageStatus = (id, status) =>
  USE_MOCK ? Promise.resolve({ id, status })
           : safeMutate(api.patch(`/contact/${id}`, { status }), { id, status });

export const deleteMessage = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/contact/${id}`), { id });