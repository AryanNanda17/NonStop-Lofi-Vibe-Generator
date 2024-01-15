import React from "react";
import LoadingComponent from "./LoadingComponent";
import "./loading.css";
import { Link } from "react-router-dom";

const LofiLoading = () => {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center flex-col">
        <LoadingComponent />
        <div className="button">
          <button className="text-white text-2xl text-center tracking-wide bg-pink-600 p-4 rounded-md">
            <Link to="/">Let's Dive</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LofiLoading;
