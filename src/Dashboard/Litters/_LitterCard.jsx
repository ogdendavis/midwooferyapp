import React from 'react';
import PropTypes from 'prop-types';

const LitterCard = (props) => {
  const { litter } = props;
  return <div>{litter.id}</div>;
};

LitterCard.propTypes = {
  litter: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default LitterCard;
