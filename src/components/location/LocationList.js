import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = (props) => {
  // The initial state is an empty array
  // locations data setLocations the function
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    LocationManager.deleteSingleLocation(id)
      .then(() => LocationManager.getAllLocations()
        .then(setLocations));
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the locations array to show a list of location cards
  return (
    <div className="container-cards">
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { props.history.push("/locations/new") }}>
            Add New Location
          </button>
        </section>
      </>
      {locations.map(location => <LocationCard 
        key={location.id}
        name={location.name}
        location={location}
        deleteLocation={deleteLocation}
        {...props}
      />)}
    </div>
  );
};
export default LocationList