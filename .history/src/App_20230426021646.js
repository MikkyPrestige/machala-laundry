import React from "react";
// import { Suspense } from "react";
import AppRouter from "./routes";
import WhyUs from "./components/whyUs";

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <AppRouter />
      <WhyUs />
    </div>
  );
}

export default App;
