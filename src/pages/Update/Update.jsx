import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

const Update = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileref = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  return (
    <div className="bg-black h-screen text-white">
      <h1 className="text-3xl font-semibold text-center mt-20">
        Update Profile
      </h1>
      {/*
        allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
        */}
      <div className="flex items-center justify-center">
        <form className="mt-12">
          <div className="flex items-center justify-center">
            <input
              type="file"
              ref={fileref}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-40 w-40 rounded-full cursor-pointer"
              onClick={() => fileref.current.click()}
            />
          </div>

          <input
            type="text"
            placeholder="username"
            defaultValue={currentUser.username}
            className="mt-10 p-2 w-full text-xl bg-black rounded-md border-solid border-white border-2"
          />
          <input
            type="email"
            placeholder="username"
            defaultValue={currentUser.email}
            className="mt-10 p-2 w-full text-xl bg-black rounded-md border-solid border-white border-2"
          />

          <div className="mt-5 flex justify-between">
            <span className="text-red-600">Delete Account</span>
            <span className="text-red-600">Sign Out</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
