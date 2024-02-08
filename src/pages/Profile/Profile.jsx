import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-black h-screen text-white"
    >
      <Navbar />
      <div>
        <div className="p-24">
          <h1 className="text-5xl text-center">Profile</h1>
          <div className="flex items-center justify-center">
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-40 w-40 mt-10 rounded-full cursor-pointer"
            />
          </div>
          <div className="text-center mt-10 flex items-center justify-center gap-5">
            <h1 className="text-2xl">User Name : </h1>
            <h2 className="text-xl">{currentUser.username}</h2>
          </div>
          <div className="text-center mt-10 flex items-center justify-center gap-5">
            <h2 className="text-2xl">Email : </h2>
            <h2 className="text-xl">{currentUser.email}</h2>
          </div>

          <div className="flex items-center justify-center mt-5">
            <button className="bg-pink-500 w-1/4 mt-4 p-3 text-xl rounded-lg hover:scale-110 transition-all duration-300">
              <Link to="/update">Update Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
