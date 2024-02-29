import React from 'react';

function Star({ filled, onClick }) {
  return (
    <span
      className="star"
      onClick={onClick}
      style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}
    >
      &#9733;
    </span>
  );
}

export default Star;