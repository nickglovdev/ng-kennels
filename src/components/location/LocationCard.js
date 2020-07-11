import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="The Location" />
        </picture>
        <h3>
          Location: <span className="card-location">{props.name}</span>
        </h3>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;