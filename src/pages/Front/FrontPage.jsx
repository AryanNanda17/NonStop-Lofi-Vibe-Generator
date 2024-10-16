import React, { memo } from "react";
import FrontCenter from "./FrontCenter";
import FrontContent from "./FrontContent";
import Sound from "../Sound/Sound";
import Footer from "../../components/Footer";
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
        <div className="h-3/5 md:mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default memo(FrontPage);
