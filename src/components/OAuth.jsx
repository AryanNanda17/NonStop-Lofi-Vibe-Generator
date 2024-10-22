import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
} from "firebase/auth";
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

  const handleGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/github", {
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
      <h1 className="mb-2 text-xl sm:text-xl">Sign in with:</h1>
      <button
        type="button"
        onClick={handleGoogle}
        className="bg-gradient-to-r from-violet-600 to-pink-500 w-full py-3 sm:py-4 px-4 sm:px-6 flex justify-center items-center text-xl sm:text-2xl rounded-xl hover:scale-110 transition-all duration-300"
      >
        <img
          src="./icons/google.svg"
          alt="google"
          className="mr-4 w-6 h-6 sm:w-8 sm:h-8"
        />
        <span>Google</span>
      </button>
      <button
        type="button"
        className="bg-gradient-to-r from-violet-600 to-pink-500 w-full mt-3 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center text-xl sm:text-2xl rounded-xl hover:scale-110 transition-all duration-300"
        onClick={handleGithub}
      >
        <img
          src="./icons/github.svg"
          alt="github"
          className="mr-4 w-6 h-6 sm:w-8 sm:h-8"
        />
        <span>Github</span>
      </button>
    </div>
  );
};

export default OAuth;
