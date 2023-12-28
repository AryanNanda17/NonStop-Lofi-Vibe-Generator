import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Experience from "./pages/Experience/Experience";
import Signup from "./pages/Signup/Signup";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Sound from "./pages/Sound/Sound";
import FrontPage from "./pages/Front/FrontPage";
import Space from "./pages/Experience/Space";
import Underwater from "./pages/Experience/Underwater";
import Nature from "./pages/Experience/Nature";
import City from "./pages/Experience/City";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" Component={FrontPage} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/sound" Component={Sound} />
        <Route path="/experience" Component={Experience} />
        <Route path="/space" Component={Space} />
        <Route path="/underwater" Component={Underwater} />
        <Route path="/nature" Component={Nature} />
        <Route path="/city" Component={City} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
