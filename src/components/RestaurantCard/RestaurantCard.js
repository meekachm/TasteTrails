import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../dessert-data.json';
import './RestaurantCard.css';
import ReviewForm from '../Review/ReviewForm';
import Reviews from '../Review/Review';

function RestaurantCard() {
  const params = useParams();
  const { id } = params;
  const { images, title, desc, address, hours, website, features, geo } = data[id];

  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    // Update the reviews state with the new review
    setReviews([...reviews, review]);
  };

  return (
    <div className="RestaurantCard">
      <div className="RestaurantCard-info">
        <div className="RestaurantCard-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
            style={{ width: '200px' }}
            alt={title}
          />
        </div>
        <p className="RestaurantCard-desc">{desc}</p>
        <p className="RestaurantCard-address">{address}</p>
        <p className="RestaurantCard-hours">{hours}</p>
        {website && (
          <p className="RestaurantCard-website">
            Website: <a href={website}>{website}</a>
          </p>
        )}
        <p className="RestaurantCard-features">
          Features: {features.join(', ')}
        </p>
        <p className="RestaurantCard-geo">
          GEO: {geo.lat}, {geo.lon}
        </p>

        {/* Review form */}
        <ReviewForm onSubmit={handleReviewSubmit} className="RestaurantCard-reviewForm" />

        {/* Render existing reviews */}
        <Reviews restaurantId={id} />
      </div>
    </div>
  );
}

export default RestaurantCard;
