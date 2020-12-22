import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// Material-UI version of normalize.css
import CssBaseLine from '@material-ui/core/CssBaseline';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const starterState = {
    token: '',
    user: {},
    loggedIn: false,
    trust: false,
  };
  const [appState, setAppState] = useState(
    JSON.parse(localStorage.getItem('appState')) || starterState,
  );

  const getAppState = () => JSON.parse(localStorage.getItem('appState')) || appState;

  // Whenever appState is updated in the app, update it in local storage!
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(appState));
  }, [appState]);

  const login = (creds) => {
    const { trust } = creds;
    setAppState({ ...appState, ...creds, loggedIn: true });
    // If we don't trust the computer, set a limit on how long data persists in localStorage
    if (!trust) {
      const expiry = Date.now() + 600000; // 10 min in milliseconds
      localStorage.setItem('expiry', expiry);
    }
  };

  const logout = async () => {
    await setAppState(starterState);
  };

  return (
    <BrowserRouter>
      <CssBaseLine />
      <Route exact path="/">
        {!appState.loggedIn ? <Login loginFunc={login} /> : <Redirect push to="/dashboard/home" />}
      </Route>
      <Route exact path="/dashboard/*">
        <Dashboard logoutFunc={logout} getAppState={getAppState} />
      </Route>
      <Route path="/login">
        <Redirect to="/" />
      </Route>
    </BrowserRouter>
  );
};

export default App;
