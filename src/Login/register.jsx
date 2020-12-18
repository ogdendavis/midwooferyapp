/*
 * TODO: Button click should open modal to enter info and create breeder
 */

import React from 'react';

import { makeStyles, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
  regArea: {
    paddingTop: '15%',
    fontSize: '0.85em',
    '& p': {
      textAlign: 'center',
      marginBottom: '0.5em',
    },
  },
});

const Register = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.regArea}
    >
      <p>Not registered yet?</p>
      <Button variant="outlined" color="primary" size="small">
        Create Account
      </Button>
    </Grid>
  );
};

export default Register;
