import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = () => {
  return (
      // react fragment no name container. No div.
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;