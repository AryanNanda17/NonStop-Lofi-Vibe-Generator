import React, { lazy, Suspense } from "react";
import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import FrontPage from "./pages/Front/FrontPage";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./pages/Update/Update";
import Play from "./pages/Sound/PlaySong/Play";
import Contact from "./pages/Contact/Contact";
import Developer from "./pages/Developer/Developer";
import ResSuccess from "./pages/Contact/ResSuccess";
import Compose from "./pages/Compose/Compose";
import Music from "./pages/Music/Music";
import Research from "./pages/Research/Research";

// Lazy load components
const Main = lazy(() => import("./pages/Experience/Main"));
const DigitalBrain = lazy(() => import("./pages/Experience/DigitalBrain"));
const Wave = lazy(() => import("./pages/Experience/Wave"));
const BigBang = lazy(() => import("./pages/Experience/BigBang"));

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
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
            <Route path="/profile" Component={Profile} />
            <Route path="/update" Component={Update} />
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
          <Route path="/" Component={FrontPage} />
          <Route path="/play" Component={Play} />
          <Route path="/contact" Component={Contact} />
          <Route path="/music" Component={Music}/>
          <Route path="/about" Component={Developer} />
          <Route path="/ressuccess" Component={ResSuccess} />
          <Route path="/about" Component={Developer} />
          <Route path="/compose" Component={Compose} />
          <Route path="/research" Component={Research} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
