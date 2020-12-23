import React from 'react';
import PropTypes from 'prop-types';

import DogCard from './Components/DogCard';

const Dogs = (props) => {
  const { getDashState } = props;
  const dashState = getDashState();
  const { dogs } = dashState;

  const dogInfo = dogs.map((d) => <DogCard key={d.id} dog={d} />);

  return <div>{dogInfo}</div>;
};

Dogs.propTypes = {
  getDashState: PropTypes.func.isRequired,
  // setDashState: PropTypes.func.isRequired,
};

export default Dogs;
