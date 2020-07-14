import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";
// (1)
const AnimalSpotlight = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

// (3)
  useEffect(() => {
    AnimalManager.getAnimal(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
    });
  }, [props.animalId]);

  // (2)
  return (
    <div className="animal-spotlight">
      <img src={require('./dog.svg')} alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;