import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white bg-black p-5 md:p-10 lg:p-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-3xl md:text-4xl lg:text-5xl">
          <img src="./images/logo.png" alt="logo" className="h-72 w-72" />
        </div>
        <div className="mt-5 md:mt-0 md:ml-10 text-center md:text-left flex">
          <div className="text-xl md:text-2xl lg:text-3xl mb-3 hover:text-gray-400 mr-6 transition-all duration-300">
            <Link to="/about">About</Link>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl mb-3 mr-8 hover:text-gray-400 transition-all duration-300">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl mb-3 mr-8 hover:text-gray-400 transition-all duration-300">
            <Link to="/login">Log In</Link>
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl mb-3 mr-8 hover:text-gray-400 transition-all duration-300">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <div>
        Experience the harmony of tomorrow, today, with AI-composed tunes.
      </div>
    </div>
  );
};

export default Footer;
