import Layout from "../Layout/Layout";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";

const Front = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".head", {
      y: 300,
      stagger: {
        each: 0.5,
      },
      duration: 2.5,
      ease: "expo.inOut",
    });
  }, []);

  return (
    <motion.div
      className="text-white bg-black h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Layout>
        <div className="w-full text-center mt-32 lg:mt-0">
          <div className="text-4xl lg:text-9xl uppercase tracking-widest mx-4 lg:mx-40">
            {"LofiVibe".split("").map((char, index) => (
              <div className="head" key={index}>
                {char === " " ? "\u00A0" : char}
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around mt-8 lg:mt-12 mx-4 lg:mx-40">
            <button className="mb-3 lg:mb-0 lg:mr-6 p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300">
              <Link to="/experience" className="text-lg lg:text-2xl">
                Music Experience
              </Link>
            </button>
            <button className="p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 mt-3 lg:mt-0">
              <Link to="https://lofi.jacobzhang.de/" className="text-lg lg:text-2xl">
                AI Generated Music
              </Link>
            </button>
          <div className="flex items-center justify-around">
            <div className="lg:mt-12 mx-4 text-2xl lg:text-2xl mt-24">
              <button className="mb-3 lg:mb-5 lg:mr-6 p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300">
                <Link to="/experience" className="ml-1 mr-6 text-center">
                  Music Experience
                </Link>
              </button>
              <br key="br1" />
              <button className="p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300">
                <Link to="/play">rated Music</Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Front;