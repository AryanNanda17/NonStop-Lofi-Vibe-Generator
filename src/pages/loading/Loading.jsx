import React, { useState } from "react";
import { motion } from "framer-motion";
import LofiLoading from "./LofiLoading";

const Loading = () => {
  const [loading, setLoading] = useState(0);
  setTimeout(() => {
    if (loading < 100) {
      setLoading((prevLoading) => prevLoading + Math.floor(Math.random() * 25));
    } else {
      if (loading >= 100) {
        setLoading(100);
      }
    }
  }, 3000);
  return (
    <div className="bg-black h-screen flex item-center justify-center">
      <div>
        <h1 className="text-white text-4xl mt-52">Loading</h1>
        <div className="text-white"></div>
      </div>
    </div>
  );
};

export default Loading;
