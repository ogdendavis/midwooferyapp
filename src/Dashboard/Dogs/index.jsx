import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import DogCard from './Components/DogCard';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const Dogs = (props) => {
  const { getDashState } = props;
  const dashState = getDashState();
  const { dogs } = dashState;

  const classes = useStyles();

  const dogInfo = dogs.map((d) => <DogCard key={d.id} dog={d} />);

  return <div className={classes.container}>{dogInfo}</div>;
};

Dogs.propTypes = {
  getDashState: PropTypes.func.isRequired,
  // setDashState: PropTypes.func.isRequired,
};

export default Dogs;
