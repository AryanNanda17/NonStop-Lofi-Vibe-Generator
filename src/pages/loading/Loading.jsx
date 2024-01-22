import React, { useState, useEffect, useMemo } from "react";
import LofiLoading from "./LofiLoading";
import "aframe";

const Loading = () => {
  const [loading, setLoading] = useState(0);

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
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center relative">
        {loading < 100 ? (
          <>
            <a-scene>
            <a-sky src="./images/cyberpunk360.jpg"></a-sky>
            <a-text
              value={`Loading ${loading}%`}
              position="0 2 -5"
              align="center"
              width="10" // Adjust the width for wrapping
              color="#ffffff"
              font="https://cdn.aframe.io/fonts/Exo2Bold.fnt"
              shader="msdf"
              opacity="0.8"
              wrap-count="10"
              anchor="center"
              material="shader: flat; side: double"
              letter-spacing="6.8"
            ></a-text>
          </a-scene>
          </>
        ) : (
          <LofiLoading />
        )}
      </div>
    </div>
  );
};

export default Loading;
