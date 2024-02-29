import React, { useState } from 'react';
import Star from '../Star/Star';

function ReviewForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    stars: 0,
    comment: ''
  });

  const handleStarClick = (index) => {
    setFormData({ ...formData, stars: index + 1 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (formData.username && formData.stars && formData.comment) {
      // Call the onSubmit function with the review data
      onSubmit(formData);
      // Reset form fields after submission
      setFormData({
        username: '',
        stars: 0,
        comment: ''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      {/* Star rating component */}
      <div>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            filled={index < formData.stars}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Your Review"
        required
      ></textarea>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
