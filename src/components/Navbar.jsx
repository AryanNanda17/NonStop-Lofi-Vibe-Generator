/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
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

    // const menuItems = (menuConfig, currentUser) => {
    //     //menuConfig is passed as parameter to define the style of the menu.
    //     //in case of desktop/mobile view, the class config for style is passed accordingly.
    //     return (
    //         <div className={`${menuConfig} w-full bg-red-200 h-20`}>
    //             <Link
    //                 to="/"
    //                 className="item  transition-all duration-300 rounded-lg p-2"
    //             >
    //                 Home
    //             </Link>
    //             <Link
    //                 to="/about"
    //                 className="item  transition-all duration-300 rounded-lg p-2"
    //             >
    //                 About
    //             </Link>
    //             {currentUser ? (
    //                 <div className="flex flex-col gap-4 text-xl lg:flex lg:flex-row items-center uppercase lg:text-2xl lg:mr-5">
    //                     <Link to="/profile">
    //                         <img
    //                             src={currentUser.profilePicture}
    //                             alt="profile"
    //                             className="item h-10 w-10 lg:mr-4 rounded-full object-cover"
    //                         />
    //                     </Link>
    //                     <Link
    //                         className="item  transition-all duration-300 rounded-lg p-2"
    //                         to="/compose"
    //                     >
    //                         Compose Music
    //                     </Link>
    //                 </div>
    //             ) : (
    //                 <div className="flex flex-col gap-4 lg:gap-0 text-xl lg:flex lg:flex-row items-center uppercase lg:text-2xl">
    //                     {/* <Link
    //               to="/research"
    //               className="item mr-8 transition-all duration-300 rounded-lg p-2"
    //             >
    //               Research
    //             </Link> */}
    //                     <Link
    //                         to="/contact"
    //                         className="item  transition-all duration-300 rounded-lg p-2"
    //                     >
    //                         Contact
    //                     </Link>
    //                     <Link
    //                         to="/login"
    //                         className="item  transition-all duration-300 rounded-lg p-2"
    //                     >
    //                         Log In
    //                     </Link>
    //                     <Link
    //                         to="/signup"
    //                         className="item  transition-colors duration-300 rounded-lg p-2"
    //                     >
    //                         Sign up
    //                     </Link>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };

    return (
        // <div className="bg-opacity-20 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-20 navbar bg-red-800">
        //     <div className="text-white pt-4 pl-6 pb-4 pr-6 text-2xl flex items-center justify-between lg:justify-between bg-yellow-400">
        //         <div className="logo ml-10 lg:ml-0">
        //             {location.pathname === "/" ? (
        //                 <button onClick={scrollToTop}>
        //                     <img
        //                         src="./images/logo.png"
        //                         alt="logo"
        //                         className="max-w-16 max-h-16"
        //                     />
        //                 </button>
        //             ) : (
        //                 <Link to="/">
        //                     <img
        //                         src="./images/logo.png"
        //                         alt="logo"
        //                         className="max-w-16 max-h-16"
        //                     />
        //                 </Link>
        //             )}
        //         </div>
        //         <div>
        //             <div className="mr-10 lg:hidden">
        //                 <button
        //                     type="button"
        //                     className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
        //                     onClick={toggleMenu}
        //                 >
        //                     ☰
        //                 </button>
        //             </div>
        //             <div>
        //                 {menuItems(
        //                     "hidden lg:flex items-center text-2xl",
        //                     currentUser
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        //         {isMenuOpen ? (
        //             <div className="z-10 text-white p-4 transition-all duration-300">
        //                 {menuItems(
        //                     "flex flex-col gap-4 items-center text-xl",
        //                     currentUser
        //                 )}
        //             </div>
        //         ) : null}
        //     </div>
        // </div>

        <div className="bg-black h-28">
            <div className="flex items-center justify-center pt-5 tracking-wider text-white font-medium text-lg">
                <Link to="/" className="hover:opacity-70 transition-all duration-300">Home<span className="ml-5">/</span></Link>
                <Link to="/about" className="hover:opacity-70 ml-5 transition-all duration-300">About</Link>
                {location.pathname === "/" ? (
                        <button onClick={scrollToTop}>
                            <img
                                src="./images/logo.png"
                                alt="logo"
                                className="max-w-20 max-h-20 mx-7"
                            />
                        </button>
                    ) : (
                        <Link to="/">
                            <img
                                src="./images/logo.png"
                                alt="logo"
                                className="max-w-20 max-h-20 mx-7"
                            />
                        </Link>
                    )}
                <Link to="/contact" className="hover:opacity-70 transition-all duration-300">Contact<span className="ml-5">/</span></Link>
                <Link to="/login" className="hover:opacity-70 ml-5 transition-all duration-300">Sign In</Link>
            </div>
        </div>
    );  
};

export default Navbar;
