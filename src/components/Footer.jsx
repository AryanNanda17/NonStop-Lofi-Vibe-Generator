import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-700 h-3/5 text-white flex items-center justify-evenly p-20">
      <div className="text-9xl">Logo</div>
      <div>
        <div className="text-2xl p-3">
          <Link to='/about'>
            About
          </Link>
        </div>
        <div className="text-2xl p-3">
          <Link to='/contact'>
            Contact
          </Link>
        </div>
        <div className="text-2xl p-3">
          <Link to='/login'>
            Log In
          </Link>
        </div>
        <div className="text-2xl p-3">
          <Link to='/signup'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
