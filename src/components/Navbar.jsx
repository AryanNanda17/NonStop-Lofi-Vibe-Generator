import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import gsap from "gsap";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    gsap.from(".logo", {
      x: -30,
      opacity: 0,
      delay: 1,
    });
    gsap.to(".logo", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.from(".item", {
      y: -300,
      opacity: 0,
      delay: 1,
    });

    gsap.to(".item", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.inOut",
      stagger: {
        each: 0.1,
      },
    });
  }, []);
  return (
    <div className="sticky bg-black text-white z-10 top-0">
      <div className="text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between">
        <div className="logo ml-10">Logo</div>
        <div>
          <div className="flex items-center uppercase text-2xl">
            <Link
              to="/"
              className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
