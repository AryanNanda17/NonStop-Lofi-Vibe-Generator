import React, { useState } from "react";
import "./login.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../../components/OAuth";

const Login = () => {
  const [show, setShow] = useState(false);
  const [showbutton, setshowbutton] = useState("Show");

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
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
      className="bg-black h-screen text-white flex flex-col md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-5xl uppercase tracking-wider text-center">
            Log In
          </h1>
          <form
            onSubmit={handleSubmit}
            action=""
            autoComplete="off"
            className="z-50 mt-4"
          >
            {/* Email Input */}
            <div className="mt-5">
              <label htmlFor="email" className="text-2xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="mt-3 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
                autoComplete="false"
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="mt-5">
              <label htmlFor="password" className="text-2xl">
                Password
              </label>
              <div className="flex relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  className="mt-2 w-full bg-black text-white rounded-md p-2 border-solid border-2 border-white text-xl pl-2"
                  autoComplete="false"
                  onChange={handleChange}
                />

                <span
                  onClick={handleShow}
                  className="absolute cursor-pointer right-2 top-2 mt-2 mr-1 flex items-center justify-center text-white font-bold text-xl"
                >
                  {showbutton}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold py-3 rounded-md text-xl hover:scale-110 transition-all duration-300"
              >
                {loading ? "Loading..." : "Log In"}
              </button>
            </div>

            {/* Error Message */}
            <p className="mt-4 text-center text-red-500">
              {error ? error.message || "Something Went Wrong" : ""}
            </p>
          </form>
          <h1 className="text-white text-center p-2 mt-4">OR</h1>
          <OAuth />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="./images/lofiimage.png"
          alt="lofiimage"
          className="rounded-md"
        />
      </div>
    </motion.div>
  );
};

export default Login;
