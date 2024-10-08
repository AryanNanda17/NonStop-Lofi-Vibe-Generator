import React, { Suspense } from "react";
import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";


import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FrontPage from "./pages/Front/FrontPage";
import Profile from "./pages/Profile/Profile";
import Update from "./pages/Update/Update";
import DigitalBrain from "./pages/Experience/DigitalBrain";
import Main from "./pages/Experience/Main";
import BigBang from "./pages/Experience/BigBang";
import Play from "./pages/Sound/PlaySong/Play";
import Wave from "./pages/Experience/Wave";
import Contact from "./pages/Contact/Contact";
import Developer from "./pages/Developer/Developer";
import ResSuccess from "./pages/Contact/ResSuccess";
import Compose from "./pages/Compose/Compose";
import Research from "./pages/Research/Research";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/experience" element={<Main />} />
          <Route path="/bang" element={<BigBang />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<Update />} />
          </Route>
          <Route path="/brain" element={<DigitalBrain />} />
          <Route path="/wave" element={<Wave />} />
          <Route path="/" element={<FrontPage />} />
          <Route path="/play" element={<Play />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Developer />} />
          <Route path="/ressuccess" element={<ResSuccess />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
