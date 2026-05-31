import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PageLoader from "../../components/PageLoader";
import MainLayout from "../layout/MainLayout";

/*Lazy Loaded Pages*/

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const Blog = lazy(() => import("../pages/Blog"));
const BlogDetail = lazy(() => import("../pages/BlogDetail"));

const Events = lazy(() => import("../pages/Events"));
const EventDetail = lazy(() => import("../pages/EventDetail"));

const GetInvolved = lazy(() => import("../pages/GetInvolved"));
const VolunteerApply = lazy(() => import("../pages/VolunteerApply"));
const PartnerWithUs = lazy(() => import("../pages/PartnerWithUs"));

const Careers = lazy(() => import("../pages/Careers"));
const CareerDetail = lazy(() => import("../pages/CareerDetail"));

const Donate = lazy(() => import("../pages/Donate"));
const Contact = lazy(() => import("../pages/Contact"));

const OurJourney = lazy(() => import("../pages/OurJourney"));
const OurJourneyStory = lazy(() => import("../pages/OurJourneyStory"));
const VoimaApp = lazy(() => import("../pages/VoimaApp"));

const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="about" element={<About />} />

          {/* EVENTS */}
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />

          {/* BLOG */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />

          {/* GET INVOLVED */}
          <Route path="get-involved" element={<GetInvolved />} />

          {/* VOLUNTEER */}
          <Route
            path="get-involved/volunteer"
            element={<VolunteerApply />}
          />

          {/* PARTNER */}
          <Route
            path="partner-with-us"
            element={<PartnerWithUs />}
          />

          {/* CAREERS */}
          <Route path="careers" element={<Careers />} />
          <Route
            path="careers/:slug"
            element={<CareerDetail />}
          />

          {/* DONATE */}
          <Route path="donate" element={<Donate />} />

          {/* CONTACT */}
          <Route path="contact" element={<Contact />} />

          {/* OUR JOURNEY */}
          <Route path="our-journey" element={<OurJourney />} />
          <Route path="our-journey/:slug" element={<OurJourneyStory />} />

          {/* VOIMA APP */}
          <Route path="voima-app" element={<VoimaApp />} />

          {/* FUTURE */}
          {/*
          <Route path="gallery" element={<Gallery />} />
          <Route path="team" element={<Team />} />
          <Route path="impact" element={<Impact />} />
          */}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </Suspense>
  );
}