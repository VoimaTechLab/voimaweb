// src/App.jsx

import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";

import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";

import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import VolunteerApply from "./pages/VolunteerApply";
import PartnerWithUs from "./pages/PartnerWithUs";

import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        {/* HOME */}
        <Route index element={<Home />} />

        {/* ABOUT */}
        <Route path="about" element={<About />} />

        {/* PROGRAMS */}
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:slug" element={<ProgramDetail />} />

        {/* EVENTS */}
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetail />} />

        {/* NEWS */}
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsArticle />} />

        {/* GET INVOLVED */}
        <Route path="get-involved" element={<GetInvolved />} />

        {/* DONATIONS */}
        <Route path="donate" element={<Donate />} />

        {/* VOLUNTEER */}
        <Route
          path="get-involved/volunteer"
          element={<VolunteerApply />}
        />

        {/* PARTNERSHIPS */}
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

        {/* CONTACT */}
        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}