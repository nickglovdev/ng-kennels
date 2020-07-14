import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";

// When it loads up Definse useState (1)
const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  // (4)
  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomIdAnimal().then(setSpotlightId);
  };

  // Cannot be empty (3)
  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  // (2)
  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} /> // (5) react conditionals inline
      }
    </>
  );
};

export default Home;