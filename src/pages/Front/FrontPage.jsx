import React from "react";
import FrontCenter from "./FrontCenter";
import FrontContent from "./FrontContent";
import Sound from "../Sound/Sound";
import "./front.css";

const FrontPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
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
