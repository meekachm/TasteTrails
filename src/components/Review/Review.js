import React from 'react';
import data from './review-data.json';

function Reviews({ restaurantId }) {
  // Filter reviews based on the restaurant ID
  const reviews = data.filter(review => review.restaurantId === restaurantId);

  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <div>No reviews yet</div>
      ) : (
        reviews.map((review, index) => (
          <div key={index}>
            <h3 className="Review-username">{review.username}</h3>
            <p className="Review-rating">Rating: {review.stars}</p>
            <p className="Review-comment">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;
