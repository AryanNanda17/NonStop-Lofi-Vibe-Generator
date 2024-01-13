import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import "./loading.css";
import { Link } from "react-router-dom";
import Tunnel from "./Tunnel";

const LofiLoading = () => {
  const [showTunnel, setShowTunnel] = useState(false);

  useEffect(() => {
    const tunneltimeout = setTimeout(() => {
      setShowTunnel(false);

      return () => clearTimeout(tunneltimeout);
    }, 30000);
  });

  const handleClick = () => {
    setShowTunnel(true);
  };

  return (
    <>
      {showTunnel && <Tunnel />}
      <div className="bg-black h-screen flex items-center justify-center flex-col">
        <LoadingComponent />
        <div className="button">
          <button
            onClick={handleClick}
            className="text-white text-2xl text-center tracking-wide bg-pink-600 p-4 rounded-md"
          >
            <Link to="/">Let's Dive</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LofiLoading;
