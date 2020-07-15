import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {
  // Hold on to hasUser value
  // Make sure it has a value
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  // Is to change to whether they are logged in
  const [hasUser, setHasUser] = useState(isAuthenticated());
  // Sets a user to pass in a user
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;