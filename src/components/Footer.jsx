import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const GIT_URL = "https://github.com/AryanNanda17/NonStop-Lofi-Vibe-Generator";
  return (
    <div className="text-white bg-black p-2 md:p-4 lg:p-6">
      <div className="flex xs-max:flex-col items-center justify-between">
        <div className="text-center md:text-left flex text-lg xs-max:flex-wrap xs-max:justify-center">
          <Link to="/about">About</Link>
          <span className="flex items-center pl-2 pr-2">|</span>
          <Link to="/contact">Feedback</Link>
          <span className="flex items-center pl-2 pr-2">|</span>
          <Link target="_blank" to={GIT_URL}>Terms of Use</Link>
          <span className="flex items-center pl-2 pr-2">|</span>
          <Link target="_blank" to={GIT_URL}>Privacy Policy</Link>
        </div>
        <div className="flex">
          <Link to={GIT_URL} target="_blank" className="bg-white mr-1 ml-1 rounded-full p-2">
            <img src="./icons/icons8-facebook.svg" alt="Facebook" />
          </Link>
          <Link to={GIT_URL} target="_blank" className="bg-white mr-1 ml-1 rounded-full p-2">
            <img src="./icons/icons8-twitter.svg" alt="Twitter" />
          </Link>
          <Link to={GIT_URL} target="_blank" className="bg-white mr-1 ml-1 rounded-full p-2">
            <img src="./icons/icons8-instagram.svg" alt="Instagram" />
          </Link>
          <Link to={GIT_URL} target="_blank" className="bg-white mr-1 ml-1 rounded-full p-2">
            <img src="./icons/icons8-youtube.svg" alt="Youtube" />
          </Link>
        </div>
      </div>
      <div className="text-sm text-gray-400 xs-max:text-center xs-max:py-2">
        Experience the harmony of tomorrow, today, with AI-composed tunes.
      </div>
    </div>
  );
};

export default Footer;
