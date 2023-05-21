import React from "react";
import { Suspense } from "react";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div class="loading">
            <div class="loading-spinner">
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
