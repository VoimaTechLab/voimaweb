import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Voima CMS",
  projectId: "4ofckur7",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});