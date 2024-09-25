import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      navigate("/ressuccess");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      className="bg-black h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <div className="">
        <div className="flex items-center justify-center">
          <form action="" className="mt-24" onSubmit={handleSubmit}>
            <h1 className="p-2 text-3xl text-center">Your Feedback</h1>
            <p className="text-2xl tracking-wide">
              Please consider giving a valuable feedback on our project which
              will help us make lofivibe even better
            </p>

            <div className="flex items-center justify-center flex-col mt-20">
              <div className="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="p-4 w-full mr-28 bg-black border-solid border-2 border-white rounded-md"
                  placeholder="Your email address"
                />
              </div>
              <div className="mt-8">
                <textarea
                  name="response"
                  id="response"
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                  className="p-6 bg-black border-solid border-2 border-white rounded-md"
                  placeholder="Your Feedback"
                />
                <br />
                <button
                  type="submit"
                  className="mt-3 w-full text-white bg-gradient-to-r from-violet-600 to-pink-500 font-semibold p-3 rounded-md text-xl hover:scale-110 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
