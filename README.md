# Voima Initiative — Public Website

Modern public-facing website for **Voima Initiative**, built with React and Vite. The site presents Voima’s mission, programs, events, and healthcare innovation work through a responsive, component-driven frontend.

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
└── frontend/                 # React/Vite application (all source code)
    ├── public/               # Static assets served as-is
    ├── src/
    │   ├── api/              # API client and endpoint definitions
    │   ├── assets/           # Images, video, and media
    │   ├── components/       # Shared components
    │   │   ├── ui/           # Reusable UI primitives (cards, headers, etc.)
    │   │   └── animations/   # Shared animation helpers
    │   ├── config/           # App configuration (e.g. SEO)
    │   ├── constants/        # Shared constants
    │   ├── context/          # React context providers
    │   ├── data/             # Shared static content (e.g. Home page data)
    │   ├── forms/            # Form components
    │   ├── hooks/            # Custom React hooks
    │   ├── publicSite/       # Public marketing site
    │   │   ├── data/         # Page-specific static content (About, Journey)
    │   │   ├── layout/       # Navbar, Footer, MainLayout
    │   │   ├── motion/       # Page/section animation variants
    │   │   ├── pages/        # Route-level page shells
    │   │   ├── routes/       # React Router configuration
    │   │   └── sections/     # Page-specific sections (home, about, journey)
    │   ├── seo/              # SEO head component
    │   └── styles/           # Global CSS, tokens, typography
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## Frontend Architecture

The public site follows a **layered structure** so pages stay thin and content is easy to update.

### 1. Pages (`publicSite/pages/`)

Route-level files compose sections and handle page-level concerns (layout wrapper, SEO). They should not contain large blocks of copy or repeated markup.

**Example:** `Home.jsx` imports and renders Home sections in order.

### 2. Sections (`publicSite/sections/<page>/`)

Page-specific UI blocks (Hero, Mission, Story, etc.). Each section owns its layout and behavior for that page.

- `sections/home/` — Homepage
- `sections/about/` — About page
- `sections/journey/` — Our Journey page

### 3. Data (`src/data/` and `publicSite/data/`)

Static copy, links, images, and structured content live in data files—not hard-coded across components.

| Location | Used for |
|----------|----------|
| `src/data/` | Shared or cross-page content (e.g. `homeData.js`) |
| `publicSite/data/` | Page-specific content (e.g. `aboutData.js`, `journeyData.js`) |

Update text, CTAs, and media references in data files first when changing content.

### 4. Reusable UI (`components/ui/`)

Generic building blocks used across sections: `SectionHeader`, `FeatureCard`, `StatCard`, `SDGCard`, and similar. Keep section files focused on composition; extract repeated patterns here.

### 5. Routing & layout

- `publicSite/routes/AppRoutes.jsx` — lazy-loaded routes inside `MainLayout`
- `publicSite/layout/` — shared Navbar, Footer, and outlet wrapper

### Path aliases

Vite resolves `@/` to `frontend/src/` (see `vite.config.js`). Prefer `@/publicSite/...`, `@/components/...`, and `@/data/...` over long relative imports.

---

## Contribution Workflow

1. **Clone the repo** and create a feature branch from the default branch.
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Work inside `frontend/`** for all code changes, installs, and scripts.

3. **Follow the architecture**
   - New page → add a page shell in `publicSite/pages/` and register the route in `AppRoutes.jsx`
   - New section → add under `publicSite/sections/<page>/`
   - Reusable markup → add under `components/ui/`
   - Copy and structured content → add or extend a file in `data/` or `publicSite/data/`

4. **Keep changes scoped** — avoid mixing unrelated refactors with feature work.

5. **Verify locally**
   ```bash
   cd frontend
   npm run lint
   npm run build
   ```

6. **Open a pull request** with a clear summary and, when relevant, screenshots for UI changes.

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

Private project. All rights reserved unless otherwise specified by the Voima Initiative team.
