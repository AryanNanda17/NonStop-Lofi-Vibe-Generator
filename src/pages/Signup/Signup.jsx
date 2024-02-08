import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [showbutton, setshowbutton] = useState("Show");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <motion.div
    className="bg-black h-screen text-white flex flex-col md:flex-row"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="w-full h-full md:w-1/2">
      <form onSubmit={handleSubmit} className="p-8">
        <h1 className="text-5xl uppercase tracking-wider text-center mt-10 mb-2">
          Sign up
        </h1>

        {/* Username Input */}
        <div className="mt-4">
          <label htmlFor="username" className="text-2xl">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            className="mt-2 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
            onChange={handleChange}
          />
        </div>

        {/* Email Input */}
        <div className="mt-4">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            className="mt-2 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
            onChange={handleChange}
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
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

        {/* Age Input */}
        <div className="mt-4">
          <label htmlFor="age" className="text-2xl">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="mt-2 bg-black p-2 border-2 border-solid border-white rounded-md w-full text-xl"
            placeholder="Your Age"
            onChange={handleChange}
          />
        </div>

        {/* Music Preference Input */}
        <div className="mt-4">
          <label htmlFor="musicpreferences" className="text-2xl">
            Music Preference
          </label>
          <input
            type="text"
            placeholder="Enter Your Music Preference"
            id="musicpreferences"
            className="mt-2 w-full bg-black border-solid border-2 border-white text-white p-2 rounded-md text-xl"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-5">
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold py-3 rounded-md text-xl hover:scale-110 transition-all duration-300"
          >
            {loading ? "Loading..." : "Create Account"}
          </button>
        </div>

        {/* Error Message */}
        <p className="mt-4 text-center text-red-500">
          {error && "Something went wrong"}
        </p>
      </form>
    </div>
    <div className="md:w-1/2 object-cover">
      <img src="./images/game.png" alt="game" className="max-w-full h-auto" />
    </div>

  </motion.div>
  );
};

export default Signup;
