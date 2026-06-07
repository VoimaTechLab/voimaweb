/* CONTACT SQL */
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT NOW()
);


/* NEWSLETTER SQL */
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);


/* WAITLIST SQL */
CREATE TABLE waitlist_subscribers (
  id UUID PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50),
  location VARCHAR(255),
  role VARCHAR(100),
  interest TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);