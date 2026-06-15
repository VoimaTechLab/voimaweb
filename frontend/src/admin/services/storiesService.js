import { USE_MOCK } from "../config";
import { mockStories } from "../data/mockData";
import { api } from "./apiClient";
import { safeGet, safeMutate } from "./http";

export const getStories = (params) =>
  USE_MOCK ? Promise.resolve(mockStories) : safeGet("/stories", mockStories, params);

export const reviewStory = (id, status) =>
  USE_MOCK ? Promise.resolve({ id, status })
           : safeMutate(api.patch(`/stories/${id}/review`, { status }), { id, status });

export const deleteStory = (id) =>
  USE_MOCK ? Promise.resolve({ id }) : safeMutate(api.delete(`/stories/${id}`), { id });