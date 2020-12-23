import React from 'react';
import PropTypes from 'prop-types';

const DogCard = (props) => {
  const { dog } = props;
  return (
    <div>
      <h2>{dog.name}</h2>
      <ul>
        <li>{`Breed: ${dog.breed}`}</li>
        <li>{`ID: ${dog.id}`}</li>
      </ul>
    </div>
  );
};

DogCard.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
};

export default DogCard;
