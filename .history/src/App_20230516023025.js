import React from "react";
import { Suspense } from "react";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading">
            <div className="loading--spinner">
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
