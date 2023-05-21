import React from "react";
import { Suspense } from "react";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div class="loadingio-spinner-wedges-qwl4cnsm0f"><div class="ldio-s3rtxgu9uk">
<div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
</div></div><div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;