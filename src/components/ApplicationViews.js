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
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from "./employee/EmployeeEditForm"
import LocationEditForm from "./location/LocationEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimal"
//only include these once they are built - previous practice exercise


const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser; // checks to see if user is logged in

  // const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;  for login
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
      {/* //pass the `setUser` function to Login component. */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />

      {/* Animal Routes */}

      {/* Make sure you add the `exact` attribute here */}
      {/* for the password looking for a true false value */}
      <Route exact path="/animals" render={props => {
        // {replace with hasUser}
        if (hasUser) {
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
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (hasUser) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      {/* updated route: `/animals` */}
      {/* The true and false statement here will make sure that you have 
      to be logged in to see the page. */}
      <Route exact path="/employees" render={props => {
        if (hasUser) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }} />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />

      {/* Locations Routes */}
      {/* Make sure you add the `exact` attribute here */}
      <Route exact path="/locations" render={props => {
        if (hasUser) {
          return <LocationList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      {/* Our shiny new route. */}
      <Route path="/locations/new" render={(props) => {
        return <LocationForm {...props} />
      }} />
      {/* Our shiny new route. */}
      {/* Colon : means that it is dynamic. the \d+ it means numbers */}
      <Route exact path="/locations/:locationId(\d+)" render={props => {
        if (hasUser) {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (hasUser) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      {/* Owner Routes */}
      <Route exact path="/owners" render={(props) => {
        if (hasUser) {
          return <OwnerList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />
      }} />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;