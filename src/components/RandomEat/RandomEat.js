import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../dessert-data.json';

function RandomEat() {
  const navigate = useNavigate();

  const handleRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomRestaurant = data[randomIndex];
    navigate(`/restaurant/${randomRestaurant.id}`);
  };

  return (
    <div>
      <h2>Random Eats</h2>
      <button onClick={handleRandomRestaurant}>Randomize Restaurant</button>
    </div>
  );
}

export default RandomEat;