# Backend Quick Setup Checklist

## 📦 Installation

### Step 1: Install Dependencies
```bash
cd backend
npm install --legacy-peer-deps
```
**If still fails**: `npm install --force`

### Step 2: Generate Prisma Client
```bash
npm run prisma:generate
```

### Step 3: Set Up Environment (.env)
Copy `.env.example` → `.env` and fill in:
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/voima?schema=public
JWT_ACCESS_SECRET=your_random_secret_1
JWT_REFRESH_SECRET=your_random_secret_2
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Step 4: Set Up Database
```bash
npm run prisma:migrate    # Creates tables
npm run prisma:seed       # Inserts test admin
```

---

## ⏳ Missing Files (Must Create)

### 1️⃣ Main Entry Point
**File**: `backend/server.js`
```javascript
import app from './src/app.js';
import { env } from './src/config/env.js';

const server = app.listen(env.port, () => {
  console.log(`🚀 Server running on http://localhost:${env.port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => console.log('Server closed'));
});
```

### 2️⃣ Express App Setup
**File**: `backend/src/app.js`
```javascript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { env } from './config/env.js';
import { errorHandler } from './middleware/error.js';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import waitlistRoutes from './routes/waitlistRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import storyRoutes from './routes/storyRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();

// Security & Performance
app.use(helmet());
app.use(compression());
app.use(cors({ origin: env.clientUrl, credentials: true }));

// Logging & Parsing
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// Routes
app.use(`${env.apiPrefix}/auth`, authRoutes);
app.use(`${env.apiPrefix}/messages`, messageRoutes);
app.use(`${env.apiPrefix}/newsletter`, newsletterRoutes);
app.use(`${env.apiPrefix}/waitlist`, waitlistRoutes);
app.use(`${env.apiPrefix}/events`, eventRoutes);
app.use(`${env.apiPrefix}/stories`, storyRoutes);
app.use(`${env.apiPrefix}/dashboard`, dashboardRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler
app.use(errorHandler);

export default app;
```

### 3️⃣ Routes (Create all these files in `backend/src/routes/`)

**authRoutes.js**
```javascript
import { Router } from 'express';
import { login, logout, refresh } from '../controllers/authController.js';
import { validate } from '../middleware/validate.js';
import { loginSchema } from '../validators/auth.validator.js';

const router = Router();

router.post('/login', validate(loginSchema), login);
router.post('/logout', logout);
router.post('/refresh', refresh);

export default router;
```

**messageRoutes.js**
```javascript
import { Router } from 'express';
import { validateSchema } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';
import { 
  createMessage, 
  listMessages, 
  getMessage, 
  updateMessage, 
  deleteMessage 
} from '../controllers/contactController.js';
import { contactSchema } from '../validators/contact.validator.js';

const router = Router();

router.post('/', validateSchema(contactSchema), createMessage);
router.get('/', auth, listMessages);
router.get('/:id', auth, getMessage);
router.put('/:id', auth, updateMessage);
router.delete('/:id', auth, deleteMessage);

export default router;
```

**newsletterRoutes.js**
```javascript
import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';
import {
  subscribe,
  listSubscribers,
  deleteSubscriber,
  exportSubscribers
} from '../services/newsletterService.js';
import { newsletterSchema } from '../validators/newsletter.validator.js';

const router = Router();

router.post('/subscribe', validate(newsletterSchema), subscribe);
router.get('/subscribers', auth, listSubscribers);
router.delete('/subscribers/:id', auth, deleteSubscriber);
router.get('/subscribers/export', auth, exportSubscribers);

export default router;
```

**waitlistRoutes.js**
```javascript
import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';
// Controllers to be created
const router = Router();

router.post('/', validate(waitlistSchema), createWaitlistEntry);
router.get('/', auth, listWaitlist);
router.get('/stats', auth, getWaitlistStats);
router.delete('/:id', auth, deleteWaitlistEntry);

export default router;
```

**eventRoutes.js**
```javascript
import { Router } from 'express';
import { auth } from '../middleware/auth.js';
// Controllers to be created
const router = Router();

router.get('/', listEvents);
router.post('/', auth, createEvent);
router.put('/:id', auth, updateEvent);
router.delete('/:id', auth, deleteEvent);

export default router;
```

**storyRoutes.js**
```javascript
import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';
// Controllers to be created
const router = Router();

router.post('/', validate(storySchema), submitStory);
router.get('/', listApprovedStories);
router.get('/pending', auth, listPendingStories);
router.put('/:id', auth, approveStory);
router.delete('/:id', auth, deleteStory);

export default router;
```

**dashboardRoutes.js**
```javascript
import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { getStats, getActivityFeed } from '../services/dashboardService.js';

const router = Router();

router.get('/stats', auth, getStats);
router.get('/activity', auth, getActivityFeed);

export default router;
```

### 4️⃣ Database Seed
**File**: `backend/prisma/seed.js`
```javascript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { env } from '../src/config/env.js';

const prisma = new PrismaClient();

async function main() {
  // Create super admin
  const hashedPassword = await bcrypt.hash(env.SEED_ADMIN_PASSWORD, 10);
  
  const admin = await prisma.admin.upsert({
    where: { email: env.SEED_ADMIN_EMAIL },
    update: {},
    create: {
      name: env.SEED_ADMIN_NAME,
      email: env.SEED_ADMIN_EMAIL,
      passwordHash: hashedPassword,
      role: 'SUPER_ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Seeded admin:', admin);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

---

## ✅ What's Already Done

### Config Files ✓
- `.env.example` - Template
- `src/config/env.js` - Environment validation
- `src/config/cloudinary.js` - Cloudinary setup

### Database ✓
- `prisma/schema.prisma` - All models defined (Admin, Message, NewsletterSubscriber, WaitlistUser, etc.)
- `src/database/prisma.js` - Prisma client singleton

### Middleware ✓
- `src/middleware/auth.js` - JWT verification
- `src/middleware/authorize.js` - Role-based access
- `src/middleware/validate.js` - Zod validation
- `src/middleware/error.js` - Error handling
- `src/middleware/rateLimit.js` - Rate limiting

### Services ✓
- `src/services/authService.js` - Login/password verification
- `src/services/tokenService.js` - JWT generation
- `src/services/emailService.js` - Email sending
- `src/services/cloudinaryService.js` - Image uploads
- `src/services/newsletterService.js` - Newsletter operations
- `src/services/dashboardService.js` - Analytics
- `src/services/activityService.js` - Activity logging

### Validators ✓
- All Zod schemas for: auth, contact, newsletter, event, story, waitlist

### Utils ✓
- `src/utils/ApiError.js` - Custom error class
- `src/utils/asyncHandler.js` - Async wrapper
- `src/utils/response.js` - Standard response formats
- `src/utils/tokens.js` - Token utilities
- `src/utils/permissions.js` - Permission checks

### Email Templates ✓
- `src/emails/templates.js` - Pre-made templates
- `src/emails/layout.js` - Email layout

---

## 🚀 Quick Start Commands

```bash
# 1. Install
cd backend
npm install --legacy-peer-deps

# 2. Setup Prisma
npm run prisma:generate

# 3. Setup Database (if PostgreSQL running)
npm run prisma:migrate
npm run prisma:seed

# 4. Start dev server
npm run dev

# 5. API ready at http://localhost:5000
```

---

## 🔍 Troubleshooting

| Error | Solution |
|-------|----------|
| npm ERR! peer dep missing | `npm install --legacy-peer-deps` |
| Cannot find module 'server.js' | Create `backend/server.js` (see above) |
| ECONNREFUSED (Prisma) | PostgreSQL not running; start it |
| Missing env var JWT_ACCESS_SECRET | Fill in `.env` from `.env.example` |
| Prisma Client not generated | `npm run prisma:generate` |
| Migration fails | Check PostgreSQL is running & DATABASE_URL is correct |

---

## 📝 Files Status

| File | Status | Notes |
|------|--------|-------|
| server.js | ❌ MISSING | Entry point - must create |
| src/app.js | ❌ MISSING | Express setup - must create |
| src/routes/* | ❌ MISSING | All routes - must create (7 files) |
| prisma/seed.js | ❌ MISSING | Database seed - must create |
| src/config/env.js | ✅ DONE | Environment config |
| prisma/schema.prisma | ✅ DONE | Database schema |
| All services | ✅ DONE | Business logic |
| All middleware | ✅ DONE | Request handling |
| All validators | ✅ DONE | Schema validation |

**Total files to create: 12 (1 main + 1 app + 7 routes + 1 seed + 2 controllers)**

