import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../dessert-data.json';

function RandomSweets() {
  const navigate = useNavigate();

  return (
    <button
      className="RandomSweets"
      onClick={(e) => {
        const id = Math.floor(Math.random() * data.length);
        navigate(`/card/${id}`);
      }}
    >
      Random Sweets
    </button>
  );
}

export default RandomSweets;


