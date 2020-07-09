//Importing Route from react-router-dom
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
//only include these once they are built - previous practice exercise


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
      <Route path="/animals" render={(props) => {
      return <AnimalList />
    }} />
    <Route path="/employees" render={(props) => {
      return <EmployeeList />
    }} />
    <Route path="/locations" render={(props) => {
      return <LocationList />
    }} />
    <Route path="/Owners" render={(props) => {
      return <OwnerList />
    }} />
    </React.Fragment>
  );
};

export default ApplicationViews;