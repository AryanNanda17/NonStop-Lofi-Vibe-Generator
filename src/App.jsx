import React from "react";
import {Routes, useLocation} from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {AnimatePresence} from "framer-motion";
import "./App.css";
import FrontPage from "./pages/Front/FrontPage";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute";
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
import AnimationLayout from "./components/AnimationLayout.jsx";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<AnimationLayout/>}>
            <Route path="/login" Component={Login}/>
            <Route path="/signup" Component={Signup}/>
            <Route path="/experience" Component={Main}/>
            <Route path="/bang" Component={BigBang}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/profile" Component={Profile}/>
              <Route path="/update" Component={Update}/>
            </Route>
            <Route path="/brain" Component={DigitalBrain}/>
            <Route path="/wave" Component={Wave}/>
            <Route path="/" Component={FrontPage}/>
            <Route path="/play" Component={Play}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/about" Component={Developer}/>
            <Route path="/ressuccess" Component={ResSuccess}/>
            <Route path="/about" Component={Developer}/>
            <Route path="/compose" Component={Compose}/>
            <Route path="/research" Component={Research}/>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
