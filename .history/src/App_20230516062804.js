import { React, useState, Suspense } from "react";
import AppRouter from "./routes";
import Avatar from "./components/avatar";
import Light from "./assets/images/lamp.svg";
import Dark from "./assets/images/night-mode.svg";
import Disk from "./assets/images/disk.svg";
import Layout from "./layout/nav";
import Footer from "./layout/footer";
import { useColorMode } from "theme-ui";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const [isDark, setIsDark] = useState(false);

  const toggleColorMode = () => {
    setColorMode(colorMode === "default" ? "dark" : "default");
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading">
            <Avatar
              image={Disk}
              alt="loading"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        }
      >
        <div className="theme">
          <button
            className="theme-button"
            onClick={toggleColorMode}
        </div>
        <Layout />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
