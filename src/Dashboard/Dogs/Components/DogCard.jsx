import React, { useState } from 'react';
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
  const { dog } = props;

  const classes = useStyles();

  const [vals, setVals] = useState({
    open: false,
  });

  const toggle = () => {
    setVals({ ...vals, open: !vals.open });
  };

  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <img src={dog.image} alt="Dog icon" />
        <div>
          <h2>{dog.name}</h2>
          <Button variant="outlined" color="primary" size="small" onClick={toggle}>
            Edit
          </Button>
        </div>
      </div>
      <div className={classes.bottom} style={{ height: vals.open ? 'auto' : 0 }}>
        <TextField value={dog.name} label="name" variant="outlined" className={classes.dogInput} />
        <TextField
          value={dog.breed}
          label="breed"
          variant="outlined"
          className={classes.dogInput}
        />
        <TextField
          value={dog.weight}
          label="weight"
          variant="outlined"
          className={classes.dogInput}
        />
        <TextField
          value={dog.color}
          label="color"
          variant="outlined"
          className={classes.dogInput}
        />
        <TextField value={dog.sex} label="sex" variant="outlined" className={classes.dogInput} />
        <IconButton color="primary" onClick={toggle}>
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
};

export default DogCard;
