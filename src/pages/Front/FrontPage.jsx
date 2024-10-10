import React from "react";
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
        <div className="h-3/5 xl:mt-20 xs-max:mt-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
