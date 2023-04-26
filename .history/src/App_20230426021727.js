import React from "react";
// import { Suspense } from "react";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <AppRouter />
    </div>
  );
}

export default App;
