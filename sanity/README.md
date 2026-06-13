# Voima Sanity CMS

## Setup
```bash
npm create sanity@latest -- --template clean --create-project "Voima CMS" --dataset production
cd voima-cms && npm run dev   # studio at http://localhost:3333
Schemas to create (schemaTypes/)

post.js     → title, slug, excerpt, body(portableText), coverImage, author(ref), categories[], publishedAt
author.js   → name, image, bio
category.js → title, description
event.js    → title, description, location, eventDate, image
gallery.js  → title, images[]

Public site reads via CDN (read-only token)
Set in frontend .env:
VITE_SANITY_PROJECT_ID=...
VITE_SANITY_DATASET=production
Copy
**Frontend Sanity client** — `frontend/src/services/sanityClient.js`

```js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, // fast, cached reads for public site
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (src) => builder.image(src);