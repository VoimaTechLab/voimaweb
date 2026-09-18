import { createClient } from "@sanity/client";

const hasSanityConfig =
  process.env.SANITY_PROJECT_ID && process.env.SANITY_WRITE_TOKEN;

const writeClient = hasSanityConfig
  ? createClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET || "production",
      apiVersion: process.env.SANITY_API_VERSION || "2024-01-01",
      token: process.env.SANITY_WRITE_TOKEN,
      useCdn: false,
    })
  : null;

export const sanityWrite = writeClient;

// Upload an image buffer to Sanity asset store, return asset ref
export const uploadSanityImage = async (file) => {
  if (!writeClient) {
    throw new Error("Sanity write access is not configured");
  }

  const asset = await writeClient.assets.upload("image", file.buffer, {
    filename: file.originalname,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
};