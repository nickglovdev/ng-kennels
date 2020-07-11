import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
  // The initial state is an empty array
  // animals data setAnimals the function
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };
  // Using this to delete animals
  const deleteAnimal = id => {
    AnimalManager.deleteSingleAnimal(id)
      .then(() => AnimalManager.getAllAnimals()
      .then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards.
  // You can also pass functions into it.
  return (
    <div className="container-cards"> 
      {animals.map(animal => <AnimalCard key={animal.id} 
                                        name={animal.name} 
                                        animal={animal}
                                        // Pass function into Animal Card to delete Animal Object then go to animal card for the button
                                        deleteAnimal={deleteAnimal}/>)}
                                        
    </div>
  );
};
export default AnimalList