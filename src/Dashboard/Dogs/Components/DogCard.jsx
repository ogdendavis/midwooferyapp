import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
import {
  makeStyles,
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';

import { Done } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  card: {
    padding: '1rem',
    margin: '1rem',
    borderRadius: '1rem',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    position: 'relative',
  },

  cardLoading: {
    '&:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '1rem',
      background: 'rgba(120,120,120,0.5)',
      content: '""',
    },
  },

  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h2': {
      marginTop: 0,
    },
    '& img': {
      width: '90px',
      marginRight: '1rem',
    },
  },

  bottom: {
    display: 'flex',
    flexFlow: 'column nowrap',
    overflow: 'hidden',
    '& button': {
      // float: 'right',
      margin: '0 auto',
    },
  },
  dogInput: {
    width: '100%',
    margin: '0.5rem 0',
  },
}));

const DogCard = (props) => {
  const { dog, updateDog } = props;

  const classes = useStyles();

  const [vals, setVals] = useState({
    dog,
    fields: ['name', 'breed', 'weight', 'color', 'sex'],
    loading: false,
    open: false,
    cardClass: classes.card,
  });

  const toggle = () => {
    setVals({ ...vals, open: !vals.open });
  };

  const getUpdatesFromInput = () => {
    // Checks for differences between dog prop and dog in vals
    // We only want to change the values that are present on the form
    const updatedFields = vals.fields.filter((key) => dog[key] !== vals.dog[key]);
    // Empty object to hold updates
    const updates = {};
    // Add value of updated fields to updates
    updatedFields.forEach((field) => {
      updates[field] = vals.dog[field];
    });
    return updates;
  };

  const handleClick = async () => {
    // If toggle is open, save changes
    if (vals.open) {
      // Activate loading styles
      await setVals({ ...vals, loading: true });
      // Get update info from user input
      const update = getUpdatesFromInput();
      // Do the update
      await updateDog({ id: dog.id, update });
      // Deactivate loading state
      setVals({ ...vals, loading: false });
    }
    // in all cases, toggle!
    toggle();
  };

  const handleInput = (prop) => (event) => {
    // Need to update dog in vals
    setVals({ ...vals, dog: { ...vals.dog, [prop]: event.target.value } });
  };

  // Toggle card classes when loading state is activated or deactivated
  useEffect(() => {
    setVals({
      ...vals,
      cardClass: vals.loading === true ? `${classes.card} ${classes.cardLoading}` : classes.card,
    });
  }, [vals.loading]);

  // Build input fields from allowed fields in vals
  const TextInputs = vals.fields.map((key) => (
    <TextField
      value={vals.dog[key]}
      label={key}
      key={`${dog.id}-${key}-field`}
      variant="outlined"
      className={classes.dogInput}
      onChange={handleInput(key)}
    />
  ));

  return (
    <div className={vals.cardClass}>
      <div className={classes.top}>
        <img src={dog.image} alt="Dog icon" />
        <div>
          <h2>{vals.dog.name}</h2>
          <Button variant="outlined" color="primary" size="small" onClick={toggle}>
            Edit
          </Button>
        </div>
      </div>
      <div className={classes.bottom} style={{ height: vals.open ? 'auto' : 0 }}>
        {TextInputs}
        <IconButton color="primary" onClick={handleClick}>
          <Done color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

DogCard.propTypes = {
  dog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  updateDog: PropTypes.func.isRequired,
};

export default DogCard;
