import React from 'react';
import PropTypes from 'prop-types';

import icon1 from '../../../assets/dogIcons/afghan.jpg';
import icon2 from '../../../assets/dogIcons/beagle.jpg';
import icon3 from '../../../assets/dogIcons/malamute.jpg';
import icon4 from '../../../assets/dogIcons/poodle.jpg';
import icon5 from '../../../assets/dogIcons/spaniel.jpg';
import icon6 from '../../../assets/dogIcons/terrier.jpg';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

const DogCard = (props) => {
  const { dog } = props;
  const icon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={icon} alt="Dog icon" />
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
