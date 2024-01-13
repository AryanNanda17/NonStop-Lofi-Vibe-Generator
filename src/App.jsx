import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Sound from "./pages/Sound/Sound";
import FrontPage from "./pages/Front/FrontPage";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Update from "./pages/Update/Update";
import DigitalBrain from "./pages/Experience/DigitalBrain";
import Main from "./pages/Experience/Main";
import BigBang from "./pages/Experience/BigBang";
import Loading from "./pages/loading/Loading";
import Wave from "./pages/Experience/Wave";
import Tunnel from "./pages/loading/Tunnel";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" Component={FrontPage} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/sound" Component={Sound} />
          <Route path="/experience" Component={Main} />
          <Route path="/bang" Component={BigBang} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" Component={Profile} />
            <Route path="/update" Component={Update} />
          </Route>
          <Route path="/brain" Component={DigitalBrain} />
          <Route path="/load" Component={Loading} />
          <Route path="/wave" Component={Wave} />
          <Route path="/tunnel" Component={Tunnel} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
