import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white mt-2 p-4">
      <h1 className="mb-2">Sign in with : </h1>
      <button
        type="button"
        onClick={handleGoogle}
        className="bg-gradient-to-r from-violet-600 to-pink-500 w-full p-2 flex justify-center items-center text-xl rounded-md hover:scale-110 transition-all duration-300"
      >
        <img src="./icons/google.svg" alt="google" className="mr-4" />
        <span className="">Google</span>
      </button>
      <button
        type="button"
        className="bg-gradient-to-r from-violet-600 to-pink-500 w-full mt-3 flex items-center justify-center p-2 text-xl rounded-md hover:scale-110 transition-all duration-300"
      >
        <img src="./icons/github.svg" alt="github" className="mr-4" />
        <span>Github</span>
      </button>
    </div>
  );
};

export default OAuth;
