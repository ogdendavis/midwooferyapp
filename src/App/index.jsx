import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// Material-UI version of normalize.css
import CssBaseLine from '@material-ui/core/CssBaseline';

import Login from '../Login';
import Dashboard from '../Dashboard';

import { getLocal, setLocal, clearLocal } from './storage';

const App = () => {
  const starterState = {
    token: '',
    user: {},
    loggedIn: false,
  };
  const [appState, setAppState] = useState(starterState);

  // const handleStateUpdate = (update) => {
  //   setAppState({ ...appState, ...update });
  // };

  const login = (creds) => {
    const { user, token, trust } = creds;
    // Set info in app state -- this is what we actually use
    setAppState({ ...appState, user, token, loggedIn: true });
    // Save values in localStorage, so we can persist logged in use on
    // page refresh or when coming back in the same browser
    setLocal({ user, token }, trust);
  };

  const logout = () => {
    setAppState(starterState);
    clearLocal();
  };

  // On initial load (or reload), check for logged in user
  useEffect(() => {
    const localData = getLocal();
    if (localData.token && localData.user) {
      setAppState({
        token: localData.token,
        user: JSON.parse(localData.user),
        loggedIn: true,
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <CssBaseLine />
      <Route exact path="/">
        {!appState.loggedIn ? (
          <Login loginFunc={login} />
        ) : (
          <Redirect push to="/dashboard/home" />
        )}
      </Route>
      <Route exact path="/dashboard/*">
        <Dashboard logoutFunc={logout} appState={appState} />
      </Route>
      <Route path="/login">
        <Redirect to="/" />
      </Route>
    </BrowserRouter>
  );
};

export default App;
