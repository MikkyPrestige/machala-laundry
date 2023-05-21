import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("../pages/about"));
const Stores = lazy(() => import("../pages/stores"));
const Booking = lazy(() => import("../pages/booking"));

const AppRouter = ({ colorMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home colorMode={colorMode} />} />
      <Route path="/about" element={<About colorMode={colorMode} />} />
      <Route path="/stores" element={<Stores colorMode={colorMode} />} />
      <Route path="/booking" element={<Booking colorMode={colorMode} />} />
    </Routes>
  );
};

export default AppRouter;
