import React, { useState, useEffect, useMemo } from "react";
import LofiLoading from "./LofiLoading";
import LoadProgress from "./LoadProgress";

const Loading = () => {
  const [loading, setLoading] = useState(0);
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading < 100) {
        setLoading((prevLoading) => {
          const newLoading = prevLoading + Math.floor(Math.random() * 25);
          return newLoading <= 100 ? newLoading : 100;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="bg-black h-screen flex item-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        {loading < 100 ? <LoadProgress /> : <LofiLoading />}
      </div>
    </div>
  );
};

export default Loading;
