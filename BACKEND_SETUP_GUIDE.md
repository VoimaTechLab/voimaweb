# Voima Backend Architecture & Setup Guide

## Overview
The backend is a Node.js/Express API with PostgreSQL database, Prisma ORM, JWT authentication, email services, and cloud storage integration.

---

## Backend Folder Structure

```
backend/
├── .env                           # Environment variables (NOT tracked)
├── .env.example                   # Template for .env
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Lock file
├── prisma/
│   └── schema.prisma              # Database schema (Prisma)
├── src/
│   ├── config/
│   │   ├── env.js                 # Environment validation
│   │   └── cloudinary.js          # Cloudinary setup
│   ├── controllers/
│   │   ├── authController.js      # Login, logout, refresh
│   │   └── contactController.js   # Contact form endpoints
│   ├── database/
│   │   └── prisma.js              # Prisma client singleton
│   ├── emails/
│   │   ├── templates.js           # Email HTML templates
│   │   └── layout.js              # Email layout wrapper
│   ├── middleware/
│   │   ├── auth.js                # JWT verification
│   │   ├── authorize.js           # Role-based authorization
│   │   ├── validate.js            # Request validation (Zod)
│   │   ├── error.js               # Error handling
│   │   ├── rateLimit.js           # Rate limiting
│   │   └── update.js              # Body/query sanitization
│   ├── services/
│   │   ├── authService.js         # Auth logic (login, register)
│   │   ├── tokenService.js        # JWT token generation/refresh
│   │   ├── emailService.js        # Nodemailer sender
│   │   ├── cloudinaryService.js   # Image upload handling
│   │   ├── newsletterService.js   # Newsletter operations
│   │   ├── dashboardService.js    # Analytics & stats
│   │   └── activityService.js     # Activity logging
│   ├── utils/
│   │   ├── ApiError.js            # Custom error class
│   │   ├── asyncHandler.js        # Async middleware wrapper
│   │   ├── response.js            # Standard response formats
│   │   ├── tokens.js              # Token utilities
│   │   └── permissions.js         # Permission checks
│   └── validators/
│       ├── auth.validator.js      # Login/register validation
│       ├── contact.validator.js   # Contact form validation
│       ├── newsletter.validator.js
│       ├── event.validator.js
│       ├── story.validator.js
│       └── waitlist.validator.js
└── prisma.config.ts               # Prisma config (TypeScript)
```

---

## Dependencies & What They Do

### Core Framework
- **express** (^4.21.1) - REST API framework
- **dotenv** (^16.4.5) - Environment variable loader

### Database & ORM
- **@prisma/client** (^7.8.0) - Prisma client (database queries)
- **prisma** (^7.8.0) - Prisma CLI (migrations, studio, code gen)

### Authentication & Security
- **jsonwebtoken** (^9.0.2) - JWT token creation & verification
- **bcryptjs** (^2.4.3) - Password hashing
- **helmet** (^8.0.0) - HTTP security headers
- **cors** (^2.8.5) - Cross-origin requests
- **cookie-parser** (^1.4.7) - Parse cookies
- **express-rate-limit** (^7.4.1) - Rate limiting for DDoS protection

### Middleware & Request Handling
- **compression** (^1.7.4) - GZIP compression
- **morgan** (^1.10.0) - HTTP request logging
- **multer** (^1.4.5-lts.1) - File upload handling
- **multer-storage-cloudinary** (^4.0.0) - Upload directly to Cloudinary

### Cloud & File Storage
- **cloudinary** (^2.5.0) - Image hosting & management

### Email
- **nodemailer** (^6.9.16) - Email sending (SMTP)

### Validation
- **zod** (^3.23.8) - Schema validation

### Development
- **nodemon** (^3.1.7) - Auto-restart on file changes

---

## Environment Variables (.env)

Create `.backend/.env` with these variables (copy from `.env.example`):

```env
# Server
NODE_ENV=development
PORT=5000
API_PREFIX=/api/v1

# Frontend
CLIENT_URL=http://localhost:5173
COOKIE_DOMAIN=localhost

# Database (PostgreSQL)
DATABASE_URL="postgresql://postgres:password@localhost:5432/voima?schema=public"

# JWT Secrets (generate random long strings)
JWT_ACCESS_SECRET=your_long_random_access_secret_here
JWT_REFRESH_SECRET=your_long_random_refresh_secret_here
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES_DAYS=7

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=voima

# Email (Gmail SMTP for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM="Voima Initiative <no-reply@voima.org>"
ADMIN_NOTIFY_EMAIL=admin@voima.org

# Seed Data
SEED_ADMIN_NAME=Emmanuel Dey
SEED_ADMIN_EMAIL=admin@voima.org
SEED_ADMIN_PASSWORD=ChangeMe123!
```

---

## Database Setup

### Prerequisites
- PostgreSQL 14+ installed locally OR cloud DB (AWS RDS, Supabase, etc.)

### Steps

1. **Create PostgreSQL database**
   ```bash
   createdb voima
   ```

2. **Set DATABASE_URL in .env**
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/voima?schema=public"
   ```

3. **Generate Prisma Client**
   ```bash
   npm run prisma:generate
   ```

4. **Run migrations** (creates tables)
   ```bash
   npm run prisma:migrate
   ```

5. **(Optional) Seed test data**
   ```bash
   npm run prisma:seed
   ```

6. **(Optional) Open Prisma Studio** (visual DB browser)
   ```bash
   npm run prisma:studio
   ```
   Then open `http://localhost:5555`

---

## Installation & Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

**If `npm install` fails**, run:
```bash
npm install --legacy-peer-deps
```

### 2. Generate Prisma Client
```bash
npm run prisma:generate
```

### 3. Set Up Environment Variables
```bash
# Copy template to .env
cp .env.example .env

# Edit .env with your actual values
# - DATABASE_URL (PostgreSQL connection)
# - JWT secrets
# - Cloudinary credentials
# - Gmail SMTP for emails
```

### 4. Create & Migrate Database
```bash
npm run prisma:migrate
```

### 5. Start Development Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

---

## NPM Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with hot reload (nodemon) |
| `npm start` | Start production server (no reload) |
| `npm run prisma:generate` | Generate Prisma client after schema changes |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:deploy` | Deploy migrations to production |
| `npm run prisma:seed` | Insert seed data (test admin) |
| `npm run prisma:studio` | Open visual database browser |

---

## Database Schema Overview

### Admin (Users)
```
- id, name, email, passwordHash, role, isActive, lastLoginAt
- Roles: SUPER_ADMIN, ADMIN, EDITOR
```

### Message (Contact Form Submissions)
```
- id, name, email, subject, message, status, createdAt
- Status: unread, read, replied, archived
```

### NewsletterSubscriber
```
- id, email, status, source, subscribedAt
- Status: active, unsubscribed
```

### WaitlistUser
```
- id, fullName, email, phone, role, joinedAt
```

### BlogPost (via Sanity, not Prisma)
```
Managed in Sanity CMS, fetched via GROQ queries
```

### Event (optional DB sync)
```
- id, title, description, date, location, status
- Status: draft, published
```

### Story (User Testimonials)
```
- id, author, content, status, rating, createdAt
- Status: pending, approved, rejected
```

### RefreshToken (Session Management)
```
- id, tokenHash, adminId, expiresAt, revokedAt, userAgent, ip
```

### ActivityLog (Audit Trail)
```
- id, type, text, adminId, createdAt
- Used for dashboarding what happened
```

---

## API Endpoints (To Be Created)

### Authentication
```
POST   /api/v1/auth/login          # Login → JWT + refresh token
POST   /api/v1/auth/logout         # Logout → revoke refresh token
POST   /api/v1/auth/refresh        # Refresh → new access token
```

### Messages (Contact Form)
```
POST   /api/v1/messages            # Public: submit form
GET    /api/v1/messages            # Admin: list all messages
GET    /api/v1/messages/:id        # Admin: get single message
PUT    /api/v1/messages/:id        # Admin: mark read/archive
DELETE /api/v1/messages/:id        # Admin: delete message
```

### Newsletter
```
POST   /api/v1/newsletter/subscribe        # Public: subscribe
GET    /api/v1/newsletter/subscribers      # Admin: list subscribers
DELETE /api/v1/newsletter/subscribers/:id  # Admin: unsubscribe user
POST   /api/v1/newsletter/export           # Admin: export as CSV
```

### Waitlist
```
POST   /api/v1/waitlist            # Public: join waitlist
GET    /api/v1/waitlist            # Admin: list all
GET    /api/v1/waitlist/stats      # Admin: breakdown by role
```

### Blog (Sanity integration)
```
GET    /api/v1/blog                # Fetch from Sanity
POST   /api/v1/blog                # Create (optional)
```

### Events
```
GET    /api/v1/events              # List all
POST   /api/v1/events              # Admin: create
PUT    /api/v1/events/:id          # Admin: update
DELETE /api/v1/events/:id          # Admin: delete
```

### Stories (Testimonials)
```
POST   /api/v1/stories             # Public: submit story
GET    /api/v1/stories             # Public: list approved
GET    /api/v1/stories/pending     # Admin: review pending
PUT    /api/v1/stories/:id         # Admin: approve/reject
```

### Dashboard
```
GET    /api/v1/dashboard/stats     # All metrics for admin dashboard
GET    /api/v1/dashboard/activity  # Activity feed
```

---

## Key Configurations

### CORS (Cross-Origin)
- Frontend at `http://localhost:5173` can call backend at `http://localhost:5000`
- Frontend URL: `CLIENT_URL` in `.env`

### JWT Tokens
- **Access Token**: Short-lived (15 minutes), sent in Authorization header
- **Refresh Token**: Long-lived (7 days), stored in HTTP-only cookie

### File Uploads
- Images uploaded via Cloudinary (not stored locally)
- Max file size: configurable in multer

### Email
- Sent via Gmail SMTP (requires App Password, not regular password)
- Templates in `src/emails/templates.js`

### Rate Limiting
- Protects login endpoint (5 attempts per 15 min)
- Configurable in `src/middleware/rateLimit.js`

---

## Common Issues & Solutions

### npm install fails
```bash
npm install --legacy-peer-deps
npm install --force
```

### "Cannot find module 'server.js'"
**Solution**: Create `backend/server.js` as the main entry point. Should import and start the Express app.

### "Missing required env var: JWT_ACCESS_SECRET"
**Solution**: Add all required env vars to `.env`. Copy from `.env.example`.

### "ECONNREFUSED - PostgreSQL not running"
**Solution**: Start PostgreSQL service
```bash
# macOS
brew services start postgresql

# Windows (if installed)
pg_ctl -D "C:\Program Files\PostgreSQL\data" start

# Or use cloud DB (Supabase, AWS RDS)
```

### "Prisma Client generation failed"
**Solution**: 
```bash
npm run prisma:generate
```

### Migrations won't run
```bash
npm run prisma:migrate
# or
npm run prisma:deploy  # for production
```

---

## Missing Files That Need Creation

The backend currently **LACKS**:

1. **`backend/server.js`** ← Main entry point
   - Import Express app
   - Start server on PORT
   - Connect to Prisma

2. **`backend/src/app.js`** ← Express app setup
   - Middleware registration
   - Route imports
   - Error handling

3. **`backend/src/routes/`** ← Route handlers
   - `authRoutes.js`
   - `messageRoutes.js`
   - `newsletterRoutes.js`
   - `waitlistRoutes.js`
   - `eventRoutes.js`
   - `storyRoutes.js`
   - `dashboardRoutes.js`
   - `index.js` (main router)

4. **`backend/prisma/seed.js`** ← Database seeding
   - Create test admin user
   - Create test data

---

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| **Framework** | Express.js |
| **Database** | PostgreSQL + Prisma ORM |
| **Auth** | JWT + bcrypt |
| **Validation** | Zod schemas |
| **File Storage** | Cloudinary |
| **Email** | Nodemailer (SMTP) |
| **Logging** | Morgan |
| **Security** | Helmet, CORS, Rate Limiting |
| **Dev Tool** | Nodemon |

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up `.env` with database & secrets
3. ✅ Run migrations: `npm run prisma:migrate`
4. ⏳ **Create main entry point** (`server.js`)
5. ⏳ **Create Express app** (`src/app.js`)
6. ⏳ **Create all route files** (in `src/routes/`)
7. ⏳ **Create database seed** (`prisma/seed.js`)
8. ⏳ Start server: `npm run dev`
9. ⏳ Test endpoints

---

## Useful Commands Cheatsheet

```bash
# Install & setup
npm install
npm run prisma:generate
npm run prisma:migrate

# Development
npm run dev              # Start with hot reload
npm run prisma:studio   # View database in browser

# Production
npm start               # Start without reload
npm run prisma:deploy   # Deploy migrations

# Database
npm run prisma:seed     # Insert test data
npm run prisma:migrate  # Create new migration
```

