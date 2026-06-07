import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import WaitlistFooter from "./Footer/WaitlistFooter";
import WaitlistNavbar from "./Navbar/WaitlistNavbar";

export default function MainLayout() {
  const location = useLocation();

  const isWaitlist =
    location.pathname.startsWith("/waitlist");

  return (
    <>
      {isWaitlist ? (
        <WaitlistNavbar />
      ) : (
        <Navbar />
      )}

      <Outlet />

      {isWaitlist ? (
        <WaitlistFooter />
      ) : (
        <Footer />
      )}
    </>
  );
}