import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Curve from "./components/curve/Curve";

// Import components
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FrontPage from "./pages/Front/FrontPage";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./pages/Update/Update";
import Play from "./pages/Sound/PlaySong/Play";
import Contact from "./pages/Contact/Contact";
import Developer from "./pages/Developer/Developer";
import ResSuccess from "./pages/Contact/ResSuccess";
import Compose from "./pages/Compose/Compose";
import Research from "./pages/Research/Research";

// Lazy load components
const Main = lazy(() => import("./pages/Experience/Main"));
const DigitalBrain = lazy(() => import("./pages/Experience/DigitalBrain"));
const Wave = lazy(() => import("./pages/Experience/Wave"));
const BigBang = lazy(() => import("./pages/Experience/BigBang"));

const App = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <AnimatePresence mode="wait"  >
        <Curve key={location.pathname}>
          <Routes location={location}>
            <Route element={<Outlet />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/experience"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Main />
                  </Suspense>
                }
              />
              <Route
                path="/bang"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BigBang />
                  </Suspense>
                }
              />
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/update" element={<Update />} />
              </Route>
              <Route
                path="/brain"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DigitalBrain />
                  </Suspense>
                }
              />
              <Route
                path="/wave"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Wave />
                  </Suspense>
                }
              />
              <Route path="/" element={<FrontPage />} />
              <Route path="/play" element={<Play />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<Developer />} />
              <Route path="/ressuccess" element={<ResSuccess />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/research" element={<Research />} />
            </Route>
          </Routes>
        </Curve>
      </AnimatePresence>
    </div>
  );
};

export default App;