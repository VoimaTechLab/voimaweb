import { formatISO, subDays } from "date-fns";

const daysAgo = (n) => formatISO(subDays(new Date(), n));

export const mockMessages = [
  { id: "m1", name: "Sarah Johnson", email: "sarah@example.com", subject: "Volunteer inquiry", message: "Hi, I'd love to volunteer for the upcoming health camp. How can I get involved?", status: "unread", createdAt: daysAgo(0) },
  { id: "m2", name: "David Okeke", email: "david@example.com", subject: "Partnership proposal", message: "Our clinic would like to partner with Voima for community outreach.", status: "read", createdAt: daysAgo(1) },
  { id: "m3", name: "Grace Mwangi", email: "grace@example.com", subject: "Donation question", message: "Is my donation tax deductible? Need info for records.", status: "replied", createdAt: daysAgo(3) },
  { id: "m4", name: "Tunde Bello", email: "tunde@example.com", subject: "App feedback", message: "Love the new Voima app! One suggestion on reminders.", status: "unread", createdAt: daysAgo(4) },
  { id: "m5", name: "Linda Park", email: "linda@example.com", subject: "Media request", message: "Writing a feature on health nonprofits. Can we schedule a call?", status: "read", createdAt: daysAgo(6) },
];

export const mockSubscribers = Array.from({ length: 48 }).map((_, i) => ({
  id: `s${i + 1}`,
  email: `subscriber${i + 1}@example.com`,
  subscribedAt: daysAgo(Math.floor(Math.random() * 60)),
}));

export const mockWaitlist = Array.from({ length: 32 }).map((_, i) => ({
  id: `w${i + 1}`,
  fullName: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `+234 80${Math.floor(10000000 + Math.random() * 89999999)}`,
  location: ["Lagos", "Nairobi", "Accra", "Kampala", "Abuja"][i % 5],
  role: ["Patient", "Caregiver", "Health Worker", "Volunteer"][i % 4],
  createdAt: daysAgo(Math.floor(Math.random() * 45)),
}));

export const mockBlogPosts = [
  { id: "b1", title: "Bridging the Healthcare Gap in Rural Communities", slug: "bridging-healthcare-gap", excerpt: "How mobile clinics are transforming access to care.", author: "Amina Yusuf", status: "published", coverImage: "", publishedAt: daysAgo(2), createdAt: daysAgo(5) },
  { id: "b2", title: "5 Ways Technology Empowers Patients", slug: "technology-empowers-patients", excerpt: "Digital tools that put health in patients' hands.", author: "David Okeke", status: "draft", coverImage: "", publishedAt: null, createdAt: daysAgo(1) },
  { id: "b3", title: "The Voima App: Behind the Scenes", slug: "voima-app-behind-scenes", excerpt: "Building healthcare tech for everyone.", author: "Grace Mwangi", status: "published", coverImage: "", publishedAt: daysAgo(10), createdAt: daysAgo(12) },
];

export const mockEvents = [
  { id: "e1", title: "Community Health Camp", description: "Free screenings and consultations.", location: "Lagos, Nigeria", eventDate: daysAgo(-7), image: "", status: "published", createdAt: daysAgo(3) },
  { id: "e2", title: "Mental Health Awareness Walk", description: "Join us for a community walk.", location: "Nairobi, Kenya", eventDate: daysAgo(-14), image: "", status: "draft", createdAt: daysAgo(1) },
];

export const mockStories = [
  { id: "st1", contributorName: "Joy Adeyemi", location: "Ibadan", story: "Voima's mobile clinic caught my condition early. Forever grateful.", image: "", status: "pending", createdAt: daysAgo(1) },
  { id: "st2", contributorName: "Peter Otieno", location: "Kisumu", story: "The health workers treated my family with such care.", image: "", status: "approved", createdAt: daysAgo(4) },
  { id: "st3", contributorName: "Mary Nakato", location: "Kampala", story: "I never thought quality healthcare could reach my village.", image: "", status: "pending", createdAt: daysAgo(2) },
];

// --- Dashboard analytics ---
export const mockGrowthSeries = Array.from({ length: 30 }).map((_, i) => {
  const day = subDays(new Date(), 29 - i);
  return {
    date: day.toISOString().slice(5, 10), // MM-DD
    subscribers: Math.floor(20 + i * 1.2 + Math.random() * 6),
    waitlist: Math.floor(10 + i * 0.8 + Math.random() * 4),
  };
});

export const mockWaitlistByRole = [
  { name: "Patient", value: 8 },
  { name: "Caregiver", value: 8 },
  { name: "Health Worker", value: 8 },
  { name: "Volunteer", value: 8 },
];

export const mockActivity = [
  { id: "a1", type: "message", text: "New message from Sarah Johnson", time: daysAgo(0) },
  { id: "a2", type: "waitlist", text: "User 32 joined the waitlist", time: daysAgo(0) },
  { id: "a3", type: "story", text: "New community story submitted by Joy Adeyemi", time: daysAgo(1) },
  { id: "a4", type: "newsletter", text: "3 new newsletter subscribers", time: daysAgo(1) },
  { id: "a5", type: "blog", text: "Blog post 'Bridging the Healthcare Gap' published", time: daysAgo(2) },
];