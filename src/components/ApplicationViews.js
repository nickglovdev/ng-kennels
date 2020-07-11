//Importing Route from react-router-dom
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
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
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/animals" render={(props) => {
        return <AnimalList />
      }} />
      {/* Colon : means that it is dynamic. the \d+ it means numbers */}
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      <Route path="/employees" render={(props) => {
        return <EmployeeList />
      }} />
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/locations" render={(props) => {
        return <LocationList />
      }} />

      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props} />
      }} />
      <Route path="/Owners" render={(props) => {
        return <OwnerList />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;