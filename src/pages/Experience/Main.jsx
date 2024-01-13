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

      <ul className="mt-5 p-4">
        <li className="text-3xl p-2">
          <Link to="/bang">Big Bang</Link>
        </li>
        <li className="text-3xl mt-5 p-2">
          <Link to="/brain">The Digital Brain</Link>
        </li>
        <li className="text-3xl mt-5 p-2">
          <Link to="/Wave">Wave</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
