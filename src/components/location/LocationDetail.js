import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'



const LocationDetail = props => {
  const [location, setLocation] = useState({ name: ""});
  // Handles loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    console.log(props.locationId)
    LocationManager.getLocation(props.locationId).then(location => {
      setLocation({
        name: location.name,
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    setIsLoading(true);
    LocationManager.deleteSingleLocation(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="My Location" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Breed: {location.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default LocationDetail