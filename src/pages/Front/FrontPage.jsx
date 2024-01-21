import React from "react";
import Front from "./Front";
import FrontCenter from "./FrontCenter";
import FrontContent from "./FrontContent";
import Sound from "../Sound/Sound";

const FrontPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-auto">
        <Sound />
      </div>
      <div className="flex-grow">
        <FrontCenter />
        <FrontContent />
      </div>
    </div>
  );
};

export default FrontPage;
