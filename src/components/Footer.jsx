import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700 h-3/5 text-white flex items-center justify-evenly p-20">
      <div className="text-9xl">Logo</div>
      <div>
        <div className="text-2xl">About</div>
        <div className="text-2xl">Contact</div>
        <div className="text-2xl">Log In</div>
        <div className="text-2xl">Sign Up</div>
      </div>
      <div>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
