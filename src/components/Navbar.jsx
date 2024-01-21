import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
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
    <div className="bg-opacity-20 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-10 navbar">
      <div className="text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-end">
        <div className="logo ml-10 fixed left-5">
          <Link to="/front">
            <img
              src="./images/logo.png"
              alt="logo"
              className="max-w-16 max-h-16"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            ☰
          </button>
        </div>
        <div>
          <div className="hidden lg:flex items-center uppercase text-2xl">
            <Link
              to="/front"
              className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
            >
              Home
            </Link>
            {currentUser ? (
              <div className="hidden lg:flex items-center uppercase text-2xl mr-5">
                <Link to="/profile">
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="item h-10 w-10 mr-4 rounded-full object-cover"
                  />
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center uppercase text-2xl">
                <Link
                  to="/login"
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-colors duration-300 rounded-lg p-2"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
