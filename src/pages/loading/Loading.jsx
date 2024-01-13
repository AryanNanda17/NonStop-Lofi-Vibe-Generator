import React, { useState } from "react";
import LofiLoading from "./LofiLoading";

const Loading = () => {
  const [loading, setLoading] = useState(0);
  setTimeout(() => {
    if (loading < 100) {
      setLoading((prevLoading) => {
        const newLoading = prevLoading + Math.floor(Math.random() * 25);
        return newLoading <= 100 ? newLoading : 100;
      });
    }
  }, 3000);

  return (
    <div className="bg-black h-screen flex item-center justify-center">
      <div>
        {loading < 100 ? (
          <div>
            <h1 className="text-white text-4xl mt-52">Loading</h1>
            <div className="text-white">{loading}</div>
          </div>
        ) : (
          <LofiLoading />
        )}
      </div>
    </div>
  );
};

export default Loading;
