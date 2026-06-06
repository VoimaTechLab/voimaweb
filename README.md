# Voima - Website

Modern public-facing website for **Voima**, built with React and Vite. The site presents Voima’s mission, programs, events, and healthcare innovation work through a responsive, component-driven frontend.

> **Important:** All application code lives in the `frontend/` directory. Run install, dev, and build commands from there unless noted otherwise.

---

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) + custom design tokens |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| UI / media | [Lucide React](https://lucide.dev/), [Swiper](https://swiperjs.com/) |
| HTTP | [Axios](https://axios-http.com/) |
| SEO | [react-helmet-async](https://github.com/staylor/react-helmet-async) |
| Linting | ESLint 10 |

---

## Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ (required for Vite 8)
- **npm** (or your preferred Node package manager)

### Run locally

```bash
cd frontend
npm install
cp .env.example .env   # optional — configure API URL and port
npm run dev
```

The dev server starts at **http://localhost:3000** by default (override with `VITE_PORT` in `.env`).

### Build for production

```bash
cd frontend
npm run build
```

Output is written to `frontend/dist/`. Preview the production build with:

```bash
npm run preview
```

### Lint

```bash
cd frontend
npm run lint
```

---

## Repository Structure

```text
voimaweb/
└── frontend/
    ├── public/
    ├── src/
    │
    │   ├── admin/                 # Internal admin dashboard
    │   │   ├── pages/
    │   │   ├── components/
    │   │   ├── routes/
    │   │   └── layouts/
    │   │
    │   ├── assets/                # Images, videos, icons, media
    │   │
    │   ├── components/            # Shared reusable components
    │   │   ├── ui/
    │   │   └── animations/
    │   │
    │   ├── services/              # Data fetching layer
    │   │   ├── blogService.js
    │   │   ├── eventService.js
    │   │   ├── journeyService.js
    │   │   └── appService.js
    │   │
    │   ├── sanity/                # Sanity CMS integration
    │   │   ├── client.js
    │   │   ├── queries/
    │   │   ├── schemas/
    │   │   └── utils/
    │   │
    │   ├── publicSite/            # Public-facing website
    │   │   ├── data/              # Temporary local content
    │   │   ├── layout/
    │   │   ├── motion/
    │   │   ├── pages/
    │   │   ├── routes/
    │   │   └── sections/
    │   │
    │   ├── seo/
    │   ├── styles/
    │   └── App.jsx
    │
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

# Frontend Architecture

The platform follows a CMS-ready architecture designed to support:

* Public Website
* Voima App
* Admin Dashboard
* Sanity CMS integration

---

## Pages (`publicSite/pages/`)

Route-level pages responsible for composing sections together.

Examples:

* Home
* About
* Our Journey
* Events
* Blog
* Voima App
* Get Involved

Pages should remain lightweight and avoid hardcoded content.

---

## Sections (`publicSite/sections/`)

Page-specific UI blocks.

Examples:

```text
sections/home/
sections/about/
sections/journey/
sections/events/
sections/blog/
sections/voimaApp/
```

Each section owns its own layout and presentation.

---

## Data (`publicSite/data/`)

During development, content is stored locally in structured data files.

Examples:

```text
aboutData.js
journeyData.js
eventData.js
blogData.js
voimaAppData.js
```

Current Flow:

```text
Page
 ↓
Data File
```

Example:

```js
Blog.jsx
  ↓
blogData.js
```

---

## Services (`services/`)

The services layer acts as the bridge between pages and external data sources.

Examples:

```text
blogService.js
eventService.js
journeyService.js
```

Pages should eventually consume services instead of directly importing data.

Future Flow:

```text
Page
 ↓
Service
 ↓
Sanity CMS
```

Example:

```js
Blog.jsx
  ↓
blogService.js
  ↓
Sanity
```

This keeps pages independent from the CMS implementation.

---

## Sanity CMS (`sanity/`)

Sanity will become the central content source for:

* Blog Articles
* Events
* Journey Stories
* Testimonials
* Team Members
* App Content

The Sanity folder will contain:

```text
client.js
queries/
schemas/
utils/
```

---

## Voima App Content Flow

The architecture is designed so content can be shared across platforms.

Example:

```text
Voima App User Post
          ↓
        Sanity
          ↓
     Blog Service
          ↓
     Website Blog
          ↓
      Voima App
```

This allows stories, testimonials, awareness articles, and community content to appear across both the website and mobile application.

---

## Routing & Layout

### Routes

```text
publicSite/routes/AppRoutes.jsx
```

Handles all public-facing routes using lazy loading.

### Layout

```text
publicSite/layout/
```

Contains:

* Navbar
* Footer
* MainLayout

Shared across the entire public site.

---

## Path Aliases

The project uses:

```js
@
```

to reference:

```text
frontend/src/
```

Example:

```js
import Navbar from "@/publicSite/layout/Navbar";
```

instead of long relative paths.

---

# Contribution Workflow

## 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

---

## 2. Follow the Architecture

New page:

```text
publicSite/pages/
```

New section:

```text
publicSite/sections/<page>/
```

Temporary content (Mockup Data):

```text
publicSite/data/
```

Data fetching logic:

```text
services/
```

CMS integration:

```text
sanity/
```

---

## 3. Keep Features Scoped

Avoid mixing unrelated features, refactors, and bug fixes in the same PR.

---

## 4. Verify Locally

```bash
cd frontend

npm install

npm run dev

npm run build
```

Ensure all pages compile successfully before opening a Pull Request.


5. **Open a pull request** with a clear summary and, when relevant, screenshots for UI changes.

---

## Environment Variables

Copy `frontend/.env.example` to `frontend/.env` and adjust as needed:

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |
| `VITE_PORT` | Dev server port (default: `3000`) |
| `VITE_APP_NAME` | Application display name |
| `VITE_FEATURE_*` | Feature flags for in-progress functionality |

Only variables prefixed with `VITE_` are exposed to the client.

---

## Working in the `frontend/` Folder

- **Install dependencies** once per machine: `npm install` (from `frontend/`)
- **Start development:** `npm run dev`
- **Production build:** `npm run build` → output in `frontend/dist/`
- **Do not** run npm commands from the repo root unless a root-level script is added later—the app is self-contained under `frontend/`

---

## License

Private project. All rights reserved unless otherwise specified by the Voima Team.
