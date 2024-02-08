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
      <div className="flex items-center justify-center h-full">
        <form className="w-full max-w-md mt-24" onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center">Your Feedback</h1>
          <p className="text-lg text-center mt-4">
            Please consider giving valuable feedback on our project to help us
            make lofivibe even better.
          </p>

          <div className="mt-8">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-white rounded-md"
              placeholder="Your email address"
            />
          </div>
          <div className="mt-6">
            <textarea
              name="response"
              id="response"
              cols="30"
              rows="10"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-white rounded-md"
              placeholder="Your Feedback"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold py-3 rounded-md text-lg hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
