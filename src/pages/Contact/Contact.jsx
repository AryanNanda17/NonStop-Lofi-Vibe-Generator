import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { RiFeedbackLine } from "react-icons/ri";
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
      className="bg-black min-h-screen text-white flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-6 md:px-0 mt-44">
        <div className="w-full max-w-lg bg-gray-900 rounded-lg p-8 shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center">
            Your Feedback
            <RiFeedbackLine
              color="white"
              size={40}
              className="ml-4 mt-[0.5]"
            />
          </h1>
          <p className="text-lg text-gray-400 text-center mb-8">
            We value your feedback to make LofiVibe even better!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="mt-2 p-4 w-full bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 text-white placeholder-gray-400"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="response"
                className="block text-lg font-semibold text-gray-300"
              >
                Your Feedback
              </label>
              <textarea
                name="response"
                id="response"
                cols="30"
                rows="6"
                onChange={handleChange}
                className="mt-2 p-4 w-full bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 text-white placeholder-gray-400"
                placeholder="Please share your feedback"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-violet-600 to-pink-500 text-xl font-semibold py-3 rounded-lg hover:scale-105 transform transition duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
