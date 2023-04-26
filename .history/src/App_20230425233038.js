import React from "react";
// import { Suspense } from "react";
import AppRouter from "./routes";
import Layout from "./components/nav";

function App() {
  return (
    <div className="App">
      <Layout />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <AppRouter />
    </div>
  );
}

export default App;
