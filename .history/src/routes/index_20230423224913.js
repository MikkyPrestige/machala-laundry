import React from "react";
import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import Home from "../components/home";
// const Home = lazy(() => import("../components/home"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;