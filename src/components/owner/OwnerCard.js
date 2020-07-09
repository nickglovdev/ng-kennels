import React from "react";

const OwnerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.png")} alt="The Owner" />
        </picture>
        <h3>
          Owner: <span className="card-owner">{props.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;