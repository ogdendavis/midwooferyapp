import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// Material-UI version of normalize.css
import CssBaseLine from '@material-ui/core/CssBaseline';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [appState, setAppState] = useState({
    token: '',
    user: {},
    loggedIn: false,
  });

  const handleStateUpdate = (update) => {
    setAppState({ ...appState, ...update });
  };

  return (
    <div>
      <CssBaseLine />
      {!appState.loggedIn && <Login handleStateUpdate={handleStateUpdate} />}
      {appState.loggedIn && (
        <Dashboard handleStateUpdate={handleStateUpdate} appState={appState} />
      )}
    </div>
  );
};

export default App;
