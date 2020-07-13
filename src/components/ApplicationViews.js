//Importing Route from react-router-dom
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import LocationForm from './location/LocationForm'
import Login from './auth/Login'
//only include these once they are built - previous practice exercise


const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null; // for login
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
      {/* Login route */}
      <Route path="/login" component={Login} />

      {/* Animal Routes */}

      {/* Make sure you add the `exact` attribute here */}
      {/* for the password looking for a true false value */}
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      {/* Our shiny new route. */}
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} />
      {/* Our shiny new route. */}
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
      {/* updated route: `/animals` */}
      
      <Route exact path="/employees" render={(props) => {
         if (isAuthenticated()) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />

      {/* Locations Routes */}
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/locations" render={(props) => {
        if (isAuthenticated()) {
          return <LocationList {...props} />
        } else {
          return <Redirect to="/login" />
        }
        
      }} />
      <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
      }} />
      <Route path="/locations/:locationId(\d+)" render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props} />
      }} />

      {/* Owner Routes */}
      <Route exact path="/owners" render={(props) => {
        if (isAuthenticated()) {
          return <OwnerList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;