import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../dessert-data.js';
import './SweetSpots.css';

function SweetSpots() {
  const [query, setQuery] = useState('');

  const filteredData = data.filter((restaurant) =>
    restaurant.title.toLowerCase().includes(query.toLowerCase())
  );

  const spaces = filteredData.map((restaurant, index) => (
    <div key={index} className="grid-item">
      <h2>{restaurant.title}</h2>
      <ul>
        {/* Map over the features array and generate list items */}
        {restaurant.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to={`/card/${index}`}>View more...</Link>
    </div>
  ));

  return (
    <div className="SweetSpots">
      <form>
        <input
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="grid">{spaces}</div>
    </div>
  );
}

export default SweetSpots;
