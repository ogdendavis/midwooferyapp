import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import db from '../_DataFetching';
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
  const { getDashState, setDashState } = props;
  const dashState = getDashState();
  const { dogs } = dashState;

  const classes = useStyles();

  // Passed to dog card to update dog in DB, dashState, and localStorage on edit
  const updateDog = async ({ id, update }) => {
    // Run the update
    const updated = await db.update.dog({ id, update });
    // Create new dog array with updated dog replaced - should maintain alpha order
    const replaced = dogs.map((d) => (d.id === updated.result.id ? updated.result : d));
    // Update dash state with new dog info
    setDashState({ ...dashState, dogs: replaced });
  };

  const dogInfo = dogs.map((d) => <DogCard key={d.id} dog={d} updateDog={updateDog} />);

  return <div className={classes.container}>{dogInfo}</div>;
};

Dogs.propTypes = {
  getDashState: PropTypes.func.isRequired,
  setDashState: PropTypes.func.isRequired,
};

export default Dogs;
