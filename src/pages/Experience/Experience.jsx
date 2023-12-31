import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import "./experience.css";
import "./Animation.js";

const Experience = () => {
  return (
    <motion.div
      className="text-white bg-black h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />

      <main className="flex flex-col gap-20 text-5xl mt-3 p-8">
        <ul>
          <li className="p-8 relative">
            <Link
              className="border-b-2 border-solid border-white link"
              to="/space"
            >
              Space Odyssey
            </Link>
          </li>

          <li className="p-8 relative">
            <Link
              className="border-b-2 border-solid border-white link"
              to="/nature"
            >
              Serene Nature
            </Link>
          </li>

          <li className="p-8 relative">
            <Link
              className="border-b-2 border-solid border-white link"
              to="/city"
            >
              Futuristic City
            </Link>
          </li>

          <li className="p-8 relative">
            <Link
              className="border-b-2 border-solid border-white link"
              to="/underwater"
            >
              Underwater Life
            </Link>
          </li>
        </ul>
      </main>
    </motion.div>
  );
};

export default Experience;
