import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    let location = useLocation();

    useEffect(() => {
        // Check if the window width is larger than a certain breakpoint (e.g., 1024px)
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);

            if (window.innerWidth > 1024) {
                setIsMenuOpen(false);
            }
        };

        // Set initial value
        handleResize();

        // Listen to window resize events
        window.addEventListener("resize", handleResize);

        return () => {
            // Remove the event listener on component unmount
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const menuItems = (menuConfig, currentUser) => {
        //menuConfig is passed as parameter to define the style of the menu.
        //in case of desktop/mobile view, the class config for style is passed accordingly.
        return (
            <div className={menuConfig}>
                <Link
                    to="/"
                    className="item lg:mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="item lg:mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                    About
                </Link>
                {currentUser ? (
                    <div className="flex flex-col gap-4 text-xl lg:flex items-center uppercase lg:text-2xl mr-5">
                        <Link to="/profile">
                            <img
                                src={currentUser.profilePicture}
                                alt="profile"
                                className="item h-10 w-10 mr-4 rounded-full object-cover"
                            />
                        </Link>
                        <Link to="/compose">Compose Music</Link>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 lg:gap-0 text-xl lg:flex lg:flex-row items-center uppercase lg:text-2xl">
                        {/* <Link
                  to="/research"
                  className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                >
                  Research
                </Link> */}
                        <Link
                            to="/contact"
                            className="item lg:mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/login"
                            className="item lg:mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="item lg:mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-colors duration-300 rounded-lg p-2"
                        >
                            Sign up
                        </Link>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-opacity-20 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-10 navbar">
            <div className="text-white pt-4 pl-6 pb-4 pr-6 text-2xl flex items-center justify-between lg:justify-between">
                <div className="logo ml-10 lg:ml-0">
                    {location.pathname === "/" ? (
                        <button onClick={scrollToTop}>
                            <img
                                src="./images/logo.png"
                                alt="logo"
                                className="max-w-16 max-h-16"
                            />
                        </button>
                    ) : (
                        <Link to="/">
                            <img
                                src="./images/logo.png"
                                alt="logo"
                                className="max-w-16 max-h-16"
                            />
                        </Link>
                    )}
                </div>
                <div>
                    <div className="mr-10 lg:hidden">
                        <button
                            type="button"
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                            onClick={toggleMenu}
                        >
                            ☰
                        </button>
                    </div>
                    <div>
                        {menuItems(
                            "hidden lg:flex items-center uppercase text-2xl",
                            currentUser
                        )}
                    </div>
                </div>
            </div>
            <div>
                {isMenuOpen ? (
                    <div className="z-10 text-white p-4 transition-all duration-300">
                        {menuItems(
                            "flex flex-col gap-4 items-center uppercase text-xl",
                            currentUser
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
