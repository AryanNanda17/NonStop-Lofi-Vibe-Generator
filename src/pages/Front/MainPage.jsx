import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import FrontPage from "./FrontPage";

const MainPage = () => {
  const [isLoading, SetisLoading] = useState(true);
  return <>{isLoading ? <Loading /> : <FrontPage />}</>;
};

export default MainPage;
