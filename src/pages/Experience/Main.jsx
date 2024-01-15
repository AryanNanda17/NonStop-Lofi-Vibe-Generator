import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <h1 className="text-center mt-6 text-4xl tracking-wider">
        Dive into the world of music with these amazing music experiences
      </h1>

      <div className="grid p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto max-w-screen-xl">
        <Link to="/bang">
          <div className="">
            <img
              src="./images/bigbang.PNG"
              alt="bigbang"
              class="w-full h-60 object-cover mb-4 rounded-md"
            />
            <h1 class="text-center text-3xl">Big Bang</h1>
          </div>
        </Link>
        <Link to="/brain">
          <div className="">
            <img
              src="./images/brain.PNG"
              alt="brain"
              class="w-full h-60 object-cover mb-4 rounded-md"
            />
            <h1 class="text-center text-3xl">Brain</h1>
          </div>
        </Link>
        <Link to="/wave" className="">
          <div className="">
            <img
              src="./images/wave.PNG"
              alt="brain"
              class="w-full h-60 object-cover mb-4 rounded-md"
            />
            <h1 class="text-center text-3xl">Wave</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
