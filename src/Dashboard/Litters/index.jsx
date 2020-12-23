import React from 'react';
import PropTypes from 'prop-types';

import LitterCard from './Components/LitterCard';

const Litters = (props) => {
  const { getDashState } = props;
  const dashState = getDashState();
  const { litters } = dashState;

  const litterInfo = litters.map((l) => <LitterCard key={l.id} litter={l} />);

  return <div>{litterInfo}</div>;
};

Litters.propTypes = {
  getDashState: PropTypes.func.isRequired,
  // setDashState: PropTypes.func.isRequired,
};

export default Litters;
