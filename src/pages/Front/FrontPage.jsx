import React from "react";
import Front from "./Front";
import FrontCenter from "./FrontCenter";
import FrontContent from "./FrontContent";
import Sound from "../Sound/Sound";

const FrontPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Front />
        <FrontCenter />
        <FrontContent />
      </div>
      <div className="mt-auto">
        <Sound />
      </div>
    </div>
  );
};

export default FrontPage;
