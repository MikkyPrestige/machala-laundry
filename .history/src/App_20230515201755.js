import React from "react";
// import { Suspense } from "react";
import AppRouter from "./routes";
import {useNavigate} from "react-router-dom";

export const Order = () => {
  const navigate = useNavigate();
  navigate("/booking");
}

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <AppRouter />
    </div>
  );
}

export default App;
