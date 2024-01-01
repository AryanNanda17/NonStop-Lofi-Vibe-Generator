import React, { useEffect, useRef } from "react";
import Front from "./Front";
import FrontCenter from "./FrontCenter";
import FrontContent from "./FrontContent";

const FrontPage = () => {
  return (
    <>
      <Front />
      <FrontCenter />
      <FrontContent />
    </>
  );
};

export default FrontPage;
