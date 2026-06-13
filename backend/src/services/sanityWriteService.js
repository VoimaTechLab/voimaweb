import { createClient } from "@sanity/client";

const writeClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN, // server-only, never exposed
  useCdn: false,
});

export const sanityWrite = writeClient;

// Upload an image buffer to Sanity asset store, return asset ref
export const uploadSanityImage = async (file) => {
  const asset = await writeClient.assets.upload("image", file.buffer, {
    filename: file.originalname,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
};