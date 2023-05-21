import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Stores = lazy(() => import("../pages/stores"));
const Booking = lazy(() => import("../pages/booking"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default AppRouter;
