import React from 'react';
import { useState } from 'react';
import data from '../../dessert-data.js';
import { Link } from 'react-router-dom';

function RestaurantDiary() {
  const [query, setQuery] = useState('');

  const spaces = data.map((restaurant, index) => (
    <div key={index}>
      <img src={restaurant.images[0]} alt={restaurant.title} />
      <p>{restaurant.address}</p>
      <Link to={`/restaurant/${index}`}>View Details</Link>
    </div>
  ));

  return (
    <div className="RestaurantDiary">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default RestaurantDiary;
