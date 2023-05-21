import React from "react";
import { Suspense } from "react";
import AppRouter from "./routes";
import Avatar from "./components/avatar";
import Disk from "./assets/images/disk.svg";

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading">
            <Avatar
              image={Disk}
              alt="loading"
            />
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
