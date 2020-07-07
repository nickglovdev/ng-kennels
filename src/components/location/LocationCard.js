import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./location.png")} alt="The Location" />
        </picture>
        <h3>
          Location: <span className="card-location">South Dog Spot</span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;