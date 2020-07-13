import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.getLocation(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the locatioin list.
    setIsLoading(true);
    LocationManager.deleteSingleLocation(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./location.png')} alt="Location" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default LocationDetail