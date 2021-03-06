import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@material-ui/core';

import { Email, Visibility, VisibilityOff } from '@material-ui/icons';

import Register from './register';

const useStyles = makeStyles({
  loginForm: {
    paddingTop: '15%',
  },

  mainErrorArea: {
    height: '2rem',
  },
});

const Login = (props) => {
  // Set up styling classes
  const classes = useStyles();

  // State to manage input entry
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailIsValid: true,
    passwordIsValid: true,
    showPassword: false,
    mainError: false,
    mainErrorMessage: ' ',
    trust: false,
  });

  const isEmailValid = (email) => {
    const regex = /^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    return email === '' ? true : regex.test(email);
  };

  const isPasswordValid = (pw) => pw.length > 4;

  const isAllInputValid = () => {
    const email = values.email === '' ? false : isEmailValid(values.email);
    const password = isPasswordValid(values.password);
    return email && password;
  };

  const handleInput = (prop) => (event) => {
    const inputValidation = {
      emailIsValid: values.emailIsValid,
      passwordIsValid: values.passwordIsValid,
    };
    if (prop === 'email') {
      inputValidation.emailIsValid = isEmailValid(event.target.value);
    } else if (prop === 'password') {
      inputValidation.passwordIsValid = isPasswordValid(event.target.value);
    }
    const updated = prop === 'trust' ? event.target.checked : event.target.value;
    setValues({ ...values, [prop]: updated, ...inputValidation });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitLogin = async () => {
    if (!isAllInputValid()) {
      setValues({
        ...values,
        mainError: true,
        mainErrorMessage: 'Please enter valid login credentials',
      });
      return;
    }
    setValues({ ...values, mainError: false, mainErrorMessage: ' ' });
    const loginDetails = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };
    const response = await fetch(`${process.env.API_BASE}/auth/login`, loginDetails);
    const data = await response.json();
    // Handle bad credentials
    if (Object.prototype.hasOwnProperty.call(data, 'invalid')) {
      setValues({
        ...values,
        mainError: true,
        mainErrorMessage: data.message,
        password: '',
        [data.invalid]: '',
        [`${data.invalid}IsValid`]: false,
      });
      return;
    }
    // Handle good credentials by passing token and user back up to App
    props.loginFunc({ ...data, trust: values.trust });
  };

  const handleKeyPress = (event) => {
    // char code for Enter is 13
    if (event.key === 'Enter' || event.charCode === 13) {
      submitLogin();
    }
  };

  // Defining password adornment
  const passwordAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {values.showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Container maxWidth="sm">
      <form className={classes.loginForm}>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Midwoofery CMS</h1>
          <TextField
            id="email"
            label="email"
            value={values.email}
            error={!values.emailIsValid}
            onChange={handleInput('email')}
            onKeyPress={handleKeyPress}
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
            <InputLabel htmlFor="password">password *</InputLabel>
            <Input
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              error={!values.passwordIsValid}
              onChange={handleInput('password')}
              onKeyPress={handleKeyPress}
              endAdornment={passwordAdornment}
              required
            />
          </FormControl>
          <FormHelperText error={values.mainError} className={classes.mainInputArea}>
            {values.mainErrorMessage}
          </FormHelperText>
          <Button variant="contained" color="primary" onClick={submitLogin}>
            Log In
          </Button>
          <FormControlLabel
            control={
              <Checkbox checked={values.trust} onChange={handleInput('trust')} name="trust" />
            }
            label="Trust this computer?"
          />
        </Grid>
      </form>
      <Register />
    </Container>
  );
};

Login.propTypes = {
  loginFunc: PropTypes.func.isRequired,
};

export default Login;
