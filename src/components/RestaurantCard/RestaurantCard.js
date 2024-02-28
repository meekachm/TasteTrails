import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../dessert-data.json';

import RestaurantDiary from '../RestaurantDiary/RestaurantDiary';

function RestaurantCard(props) {
  const params = useParams();
  const { id } = params;
  const { images, title, desc, address, hours, website, features, geo } = data[id];

  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
          alt={title}
        />
      </div>

      <div className="RestaurantCard-info">
        <h1 className="RestaurantCard-title">{title}</h1>
        <p className="RestaurantCard-desc">{desc}</p>
        <p className="RestaurantCard-address">{address}</p>
        <p className="RestaurantCard-hours">{hours}</p>
        <p className="RestaurantCard-website">{website}</p>
        <RestaurantDiary features={features} />
        <p className="RestaurantCard-geo">
          {' '}
          GEO: {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;