import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = () => {
  return (
      // react fragment
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;