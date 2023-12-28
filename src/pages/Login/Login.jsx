import React, { useState } from "react";
import "./login.css";
import { motion } from "framer-motion";

const Login = () => {
  const [show, setShow] = useState(false);
  const [showbutton, setshowbutton] = useState("Show");

  const handleShowButton = () => {
    if (showbutton === "Show" && show === false) {
      setshowbutton("Hide");
    } else {
      setshowbutton("Show");
    }
  };

  const handleShow = () => {
    setShow(!show);
    handleShowButton();
  };
  return (
    <motion.div
      className="bg-black h-screen text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <form action="" autoComplete="off" className="z-50">
        <h1 className="text-5xl uppercase tracking-wider text-center">
          Log In
        </h1>

        <div className="mt-5 pl-4 pr-4 pb-3">
          <span className="text-2xl">Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            className="mt-3 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
            autoComplete="false"
          />
          <br />
        </div>

        <div className="mt-5 pl-4 pr-4 pb-3">
          <span className="text-2xl">Password</span>
          <br />
          <div className="flex relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="mt-2 w-full bg-black text-white rounded-md p-2 border-solid border-2 border-white text-xl pl-2"
              autoComplete="false"
            />

            <span
              onClick={handleShow}
              className="absolute cursor-pointer right-2 top-2 mt-2 mr-1 flex items-center justify-center text-white font-bold text-xl"
            >
              {showbutton}
            </span>
          </div>

          <br />
        </div>

        <div className="flex items-center justify-center p-4">
          <button
            type="submit"
            className="mt-8 text-white bg-pink-500 font-semibold w-full p-3 rounded-md text-xl hover:scale-110 transition-all duration-300"
          >
            Submit
          </button>
        </div>

        <h1 className="text-white text-center p-2">OR</h1>
        <div className="text-white mt-2 p-4">
          <h1 className="mb-2">Sign in with : </h1>
          <button className="bg-pink-500 w-full p-2 flex justify-center items-center text-xl rounded-md hover:scale-110 transition-all duration-300">
            <img src="./icons/google.svg" alt="google" className="mr-4" />
            <span className="">Google</span>
          </button>
          <button className="bg-pink-500 w-full mt-3 flex items-center justify-center p-2 text-xl rounded-md hover:scale-110 transition-all duration-300">
            <img src="./icons/github.svg" alt="github" className="mr-4" />
            <span>Github</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
