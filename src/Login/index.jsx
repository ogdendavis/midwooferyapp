import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import {
  makeStyles,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@material-ui/core';

import { Email, Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles({
  loginForm: {
    paddingTop: '15%',
  },

  loginButton: {
    marginTop: '1rem',
  },

  regArea: {
    paddingTop: '15%',
    fontSize: '0.85em',
    '& p': {
      textAlign: 'center',
      marginBottom: '0.5em',
    },
  },
});

const Login = () => {
  // Set up styling classes
  const classes = useStyles();

  // State to manage input entry
  const [values, setValues] = useState({
    email: '',
    pass: '',
    showPass: false,
  });

  const handleInput = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPass: !values.showPass });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.loginForm}>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Midwoofery CMS</h1>
          <TextField
            id="email"
            label="email"
            value={values.email}
            onChange={handleInput('email')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled>
                    <Email />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <FormControl>
            <InputLabel htmlFor="password">password*</InputLabel>
            <Input
              id="password"
              type={values.showPass ? 'text' : 'password'}
              value={values.pass}
              onChange={handleInput('pass')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            Log In
          </Button>
        </Grid>
      </form>
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
    </Container>
  );
};

// Login.propTypes = {
//   breeders: PropTypes.arrayOf(PropTypes.object).isRequired,
//   isVisible: PropTypes.bool.isRequired,
//   setbreederId: PropTypes.func.isRequired,
// };

export default Login;
