import React from 'react';
import { Link } from 'react-router-dom';

function DessertSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="DessertSpace">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="400"
          height="400"
          alt={name}
        />
      </Link>
      <h1 className="DessertSpace-title">
        <Link to={`/details/${id}`}>{name}</Link>
      </h1>
      <div className="DessertSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default DessertSpace;