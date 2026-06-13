# Voima Website - Admin Dashboard Architecture

## Overview
The admin panel is a React-based dashboard built with Vite that manages all platform data. Currently using mock data, but designed to connect to a backend API. The public site feeds data into the admin dashboard for growth tracking, and Sanity CMS manages page content.

---

## Admin Folder Structure

### 📁 `/frontend/src/admin/`

```
admin/
├── config.js                 # Configuration (USE_MOCK flag, mock credentials)
├── components/               # Reusable UI components
│   ├── PageLoader.jsx       # Loading spinner
│   ├── RichTextEditor.jsx   # WYSIWYG editor for content
│   └── ui/                  # UI component library
│       ├── Card.jsx, PageHeader.jsx, StatCard.jsx, etc.
├── context/
│   └── AuthContext.jsx      # Authentication state management
├── data/
│   └── mockData.js          # Mock data for all entities (messages, subscribers, waitlist, blog, events, stories)
├── hooks/
│   └── useDebounce.js       # Debounce hook for search/filtering
├── layouts/
│   └── AdminLayout.jsx      # Main admin layout with sidebar
├── pages/                   # Admin pages
│   ├── Login.jsx            # Authentication page
│   ├── Dashboard.jsx        # Overview with stats & charts
│   ├── Messages.jsx         # Contact messages from public site
│   ├── Newsletter.jsx       # Email subscribers list
│   ├── Waitlist.jsx         # Waitlist signups
│   ├── BlogManager.jsx      # Blog post management
│   ├── EventsManager.jsx    # Event management
│   ├── Stories.jsx          # User stories/testimonials
│   ├── Settings.jsx         # Admin settings (Super Admin only)
│   └── NotFound.jsx         # 404 page
├── routes/
│   ├── AdminRoutes.jsx      # Route definitions
│   ├── ProtectedRoute.jsx   # Authentication wrapper
│   └── RoleRoute.jsx        # Role-based access control
├── services/
│   ├── adminApi.js          # API client setup (future)
│   ├── apiClient.js         # Base HTTP client
│   ├── authService.js       # Login/logout logic
│   ├── dashboardService.js  # Stats aggregation
│   └── dataService.js       # CRUD operations for all entities
└── utils/
    ├── exportCSV.js         # CSV export functionality
    └── format.js            # Formatting utilities
```

---

## Data Flow Architecture

### 🔄 Current Flow (Mock Mode)

```
Mock Data (mockData.js)
    ↓
Services (dataService.js, dashboardService.js)
    ↓
Pages (Dashboard, Messages, Waitlist, etc.)
    ↓
UI Components
    ↓
Admin User
```

### 🔄 Future Flow (Production Mode)

```
┌─────────────────────────────────────────────────────────────┐
│                    PUBLIC SITE                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │  Contact Form    │  │  Newsletter Form │               │
│  │  (publicSite/)   │  │  (publicSite/)   │               │
│  └────────┬─────────┘  └────────┬─────────┘               │
│           │                     │                          │
│  ┌────────▼─────────┐  ┌────────▼─────────┐               │
│  │  POST /messages  │  │ POST /subscribers│               │
│  └────────┬─────────┘  └────────┬─────────┘               │
│           │                     │                          │
│  ┌────────▼─────────────────────▼─────────┐               │
│  │    Waitlist Form (publicSite/)         │               │
│  │    POST /waitlist                      │               │
│  └────────┬──────────────────────────────┘               │
│           │                                              │
└───────────┼──────────────────────────────────────────────┘
            │
            │ All POST requests
            │
    ┌───────▼──────────┐
    │   BACKEND API    │  ← To be created
    │   (Node/Express) │
    │                  │
    │ POST   /messages
    │ POST   /subscribers
    │ POST   /waitlist
    │ GET    /analytics
    │ GET    /blog (from Sanity)
    │ GET    /events (from Sanity or DB)
    │
    └───────┬──────────┘
            │
    ┌───────▼──────────────────────────┐
    │  DATABASE                         │
    │  - Messages                       │
    │  - Subscribers                    │
    │  - Waitlist entries               │
    │  - Blog posts (synced from Sanity)│
    │  - Events                         │
    │  - Stories/Testimonials           │
    └───────┬──────────────────────────┘
            │
            │ GET requests
            │
    ┌───────▼──────────────────────┐
    │    ADMIN DASHBOARD           │
    │                              │
    │ Services pull data via API   │
    │ Display in Dashboard pages   │
    │ Charts & growth metrics      │
    │ CSV export capability        │
    └──────────────────────────────┘
```

---

## Key Admin Pages & Their Data Sources

### 1. **Dashboard** (`Dashboard.jsx`)
- **Data Source**: `dashboardService.getStats()`
- **Displays**:
  - Message count & unread messages
  - Subscriber count
  - Waitlist entries
  - Blog posts count
  - Events count
  - Pending stories
  - Growth charts & activity feed
- **Charts**: Area charts (growth over time), Pie charts (data distribution)

### 2. **Messages** (`Messages.jsx`)
- **Data Source**: `messagesService` (from `dataService.js`)
- **Connections**: Receives data from public site **Contact Form**
- **Operations**: List, view, mark as read, delete

### 3. **Newsletter** (`Newsletter.jsx`)
- **Data Source**: `subscribersService`
- **Connections**: Receives data from public site **Newsletter Form**
- **Operations**: List subscribers, segment, export

### 4. **Waitlist** (`Waitlist.jsx`)
- **Data Source**: `waitlistService`
- **Connections**: Receives data from public site **Waitlist Form**
- **Operations**: View signups, track growth metrics, export

### 5. **Blog Manager** (`BlogManager.jsx`)
- **Data Source**: Will sync with Sanity CMS
- **Connections**: Create/edit blog posts in Sanity, fetch via API
- **Operations**: CRUD operations

### 6. **Events Manager** (`EventsManager.jsx`)
- **Data Source**: `eventsService` (or Sanity)
- **Operations**: Create, read, update, delete events

### 7. **Stories** (`Stories.jsx`)
- **Data Source**: `storiesService`
- **Operations**: Approve/reject user testimonials

---

## Services Architecture

### `dataService.js` - CRUD Factory
```javascript
// Generic CRUD service factory
function makeService(seed) {
  return {
    async list()           // GET all items
    async create(item)     // POST new item
    async update(id, patch) // PUT item
    async remove(id)       // DELETE item
  }
}

// Exported services (one per entity):
export const messagesService       // Contact form submissions
export const subscribersService    // Newsletter subscribers
export const waitlistService       // Waitlist signups
export const blogService           // Blog posts (→ Sanity)
export const eventsService         // Events
export const storiesService        // User stories/testimonials
```

### `dashboardService.js` - Analytics Aggregator
```javascript
export const dashboardService = {
  async getStats() {
    // Aggregates counts from all services
    // Returns: {
    //   messages, unreadMessages, subscribers, waitlist, 
    //   blogPosts, events, pendingStories,
    //   growthSeries, waitlistByRole, activity
    // }
  }
}
```

### `authService.js` - Authentication
```javascript
// Login/logout/session management
// Currently uses mock credentials:
// email: admin@voima.org
// password: voima123
```

### `apiClient.js` - HTTP Layer
```javascript
// Base HTTP client for API calls
// Currently commented out (awaiting backend)
// Will handle: requests, auth headers, error handling
```

---

## Public Site Integration Points

### 🔗 Data Flow from Public Site → Admin

#### **1. Contact Messages**
- **Public Site**: `publicSite/sections/ContactForm.jsx` (or `forms/ContactForm/`)
- **API Endpoint**: `POST /api/messages`
- **Backend**: Save to database
- **Admin View**: `Messages` page shows all contact submissions
- **Dashboard**: Count displayed in stat card

#### **2. Newsletter Subscribers**
- **Public Site**: `publicSite/sections/NewsletterForm.jsx` (or `forms/NewsletterForm/`)
- **API Endpoint**: `POST /api/subscribers`
- **Backend**: Save to database
- **Admin View**: `Newsletter` page shows all subscribers
- **Dashboard**: Subscriber count & growth chart

#### **3. Waitlist Signups**
- **Public Site**: `publicSite/pages/GetInvolvedData.jsx` (or waitlist folder)
- **API Endpoint**: `POST /api/waitlist`
- **Backend**: Save to database, track role/interest
- **Admin View**: `Waitlist` page shows signups by role
- **Dashboard**: Waitlist count, pie chart by role

---

## Sanity CMS Integration

### 🔗 Content Management Flow

```
Sanity Studio (sanity/)
    │
    ├─ Blog Posts → Posts schema
    ├─ Events → Events schema
    ├─ Pages → Page schemas
    └─ Other content
    
    ↓ GROQ Queries
    
Sanity Client (src/sanity/client.js)
    │
    ├─ Query blog posts
    ├─ Query events
    └─ Query page content
    
    ↓
    
Public Site (publicSite/)
    │
    ├─ Blog pages fetch from Sanity (not hardcoded)
    ├─ Events pages fetch from Sanity
    └─ Other pages use Sanity content
    
    ↓ (Option 1) Real-time sync
    
Admin Dashboard (optional)
    │
    └─ Blog Manager displays Sanity posts
    └─ Events Manager displays Sanity events
```

### **Key Files**:
- `src/sanity/client.js` - Sanity client setup
- `src/sanity/queries/` - GROQ queries
- `src/sanity/schemas/` - Schema definitions

---

## Authentication & Authorization

### **AuthContext** (`context/AuthContext.jsx`)
- Manages login state
- Stores user role (SUPER_ADMIN, ADMIN, MODERATOR, etc.)
- Handles logout

### **Route Protection**
```javascript
<ProtectedRoute />        // Only logged-in users
<RoleRoute allow={...} /> // Only specific roles
  ├─ Settings page → SUPER_ADMIN only
  └─ Other pages → Any admin user
```

---

## Configuration & Modes

### `config.js`
```javascript
export const USE_MOCK = true; // ← FLIP THIS when backend ready
// Mock credentials for testing:
// email: admin@voima.org
// password: voima123
```

**Toggle Steps**:
1. Backend is ready
2. `apiClient.js` is configured with backend URL
3. `config.js` → `USE_MOCK = false`
4. All services automatically switch to API mode

---

## Backend Checklist

To start the backend, you'll need these endpoints:

### **Authentication**
```
POST   /auth/login          → { email, password } → JWT token
POST   /auth/logout         → Clear session
GET    /auth/verify         → Check token validity
```

### **Messages** (from Contact Form)
```
POST   /api/messages        → { name, email, message, ... }
GET    /api/messages        → List all messages
GET    /api/messages/:id    → Get single message
PUT    /api/messages/:id    → Update (mark read, etc)
DELETE /api/messages/:id    → Delete message
```

### **Subscribers** (from Newsletter)
```
POST   /api/subscribers     → { email, ... }
GET    /api/subscribers     → List all
DELETE /api/subscribers/:id → Unsubscribe
```

### **Waitlist** (from Waitlist Form)
```
POST   /api/waitlist        → { email, role, interest, ... }
GET    /api/waitlist        → List all
GET    /api/waitlist/stats  → Breakdown by role
```

### **Blog** (from Sanity or DB)
```
GET    /api/blog            → All blog posts
POST   /api/blog            → Create (if not using Sanity)
PUT    /api/blog/:id        → Update
DELETE /api/blog/:id        → Delete
```

### **Events**
```
GET    /api/events          → All events
POST   /api/events          → Create
PUT    /api/events/:id      → Update
DELETE /api/events/:id      → Delete
```

### **Stories/Testimonials**
```
GET    /api/stories         → All stories
POST   /api/stories         → Submit new story
PUT    /api/stories/:id     → Approve/reject
DELETE /api/stories/:id     → Delete
```

### **Analytics/Dashboard**
```
GET    /api/analytics/stats → All dashboard metrics
GET    /api/analytics/growth-series → Growth chart data
GET    /api/analytics/activity → Activity feed
```

---

## Next Steps for Backend Development

1. ✅ **Frontend Ready**: Admin dashboard structure is complete
2. ⏳ **Create Backend API** (Node.js/Express/Django/etc)
   - Set up database (PostgreSQL/MongoDB)
   - Create all endpoints above
   - Add authentication (JWT)
3. ⏳ **Update `apiClient.js`**
   - Set API base URL
   - Configure headers
4. ⏳ **Flip `USE_MOCK = false`** in `config.js`
5. ⏳ **Connect Public Site Forms** to API
   - Contact form → POST `/api/messages`
   - Newsletter form → POST `/api/subscribers`
   - Waitlist form → POST `/api/waitlist`
6. ⏳ **Sync Sanity Content**
   - Use GROQ queries to fetch blog/events
   - Update admin dashboard if needed

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite, Tailwind CSS |
| **State** | React Context (AuthContext) |
| **UI** | Custom components, Lucide icons |
| **Charts** | Recharts |
| **Routing** | React Router v6 |
| **HTTP** | Fetch API / Axios (apiClient.js) |
| **CMS** | Sanity (groq queries) |
| **Backend** | (To be created) |
| **Database** | (To be created) |

---

## File Locations Quick Reference

| Purpose | Location |
|---------|----------|
| Admin config | `frontend/src/admin/config.js` |
| Mock data | `frontend/src/admin/data/mockData.js` |
| Services | `frontend/src/admin/services/*.js` |
| Pages | `frontend/src/admin/pages/*.jsx` |
| Auth context | `frontend/src/admin/context/AuthContext.jsx` |
| Public forms | `frontend/src/forms/` |
| Sanity config | `frontend/src/sanity/` |
| Public site | `frontend/src/publicSite/` |

