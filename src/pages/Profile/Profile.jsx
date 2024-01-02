import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <div className="mt-5">
        <h1 className="text-5xl text-center">Profile</h1>
        <div className="flex items-center justify-center">
          <img
            src={currentUser.profilePicture}
            alt="profile"
            className="h-40 w-40 mt-10 rounded-full cursor-pointer"
          />
        </div>
        <div className="text-center mt-10">
          <h1>User Name : </h1>
          <h2>{currentUser.username}</h2>
        </div>
        <div className="text-center mt-10">
          <h2>Email : </h2>
          <h2>{currentUser.email}</h2>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button>
            <Link to="/update">Update</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
