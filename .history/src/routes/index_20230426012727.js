import React from "react";
import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Home from "../components/home";
import About from "../components/about";
// const Home = lazy(() => import("../components/home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRouter;