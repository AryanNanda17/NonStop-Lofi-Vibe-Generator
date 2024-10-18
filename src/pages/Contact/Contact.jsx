import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const controls = useAnimation();

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

      // Start the exit animation
      await controls.start({ opacity: 0 });

      // Navigate after the animation completes
      navigate("/ressuccess");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="bg-black min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <motion.div 
        className=" mx-auto px-4 py-8"
      >
        <form onSubmit={handleSubmit} className="max-w-2xl pt-[60px] mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Your Feedback</h1>
          <p className="text-xl mb-8 text-center">
            Please consider giving valuable feedback on our project which
            will help us make lofivibe even better
          </p>

          <div className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="w-full p-4 bg-black border-2 border-white rounded-md"
                placeholder="Your email address"
                required
              />
            </div>
            <div>
              <textarea
                name="response"
                id="response"
                rows="6"
                onChange={handleChange}
                className="w-full p-4 bg-black border-2 border-white rounded-md"
                placeholder="Your Feedback"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-violet-600 to-pink-500 font-semibold p-4 rounded-md text-xl hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;