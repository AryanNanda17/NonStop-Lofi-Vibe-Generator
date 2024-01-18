import React, { useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import "./loading.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const LofiLoading = () => {
  useEffect(() => {
    gsap.from(".words", {
      opacity: 0,
    });
    gsap.to(".words", {
      opacity: 1,
      duration: 4,
    });
  });
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center flex-col">
        <LoadingComponent />
        <span className="text-white text-lg uppercase mb-5 text-center words">
          Where Technology meets Creativity
        </span>
        <div className="button">
          <button className="text-white text-2xl text-center tracking-wide bg-gradient-to-r from-violet-600 to-pink-500 p-4 rounded-md">
            <Link to="/front">Let's Dive</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LofiLoading;
