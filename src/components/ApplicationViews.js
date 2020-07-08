//Importing Route from react-router-dom
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
  return (
      // Wrap everything in fragment without an extra div
    <React.Fragment>
      <Route
      // Exactly a / slash is seen. If not used sometimes it will show multiple cards.
        exact
        path="/"
        // The / slash takes us back home and keeps up with the back button
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationCard />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeCard />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;