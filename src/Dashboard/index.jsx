import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Header from './_Header';
import Settings from './_Settings';
import RouterRender from './_RouterRender';

const useStyles = makeStyles({
  main: {
    padding: '1rem',
  },
});

const Dashboard = (props) => {
  const { logoutFunc, appState } = props;
  const classes = useStyles();

  const initialState = {
    settingsOpen: false,
    dogs: [],
    litters: [],
    breeder: appState.user,
    token: appState.token,
  };
  const [dashState, setDashState] = useState(initialState);

  // Add clearing dashstate to logoutFunc
  const logoutAndClearDashState = () => {
    logoutFunc();
    setDashState({});
  };

  const toggleSettingsDrawer = () => {
    setDashState({ ...dashState, settingsOpen: !dashState.settingsOpen });
  };

  return (
    <>
      <Header toggleSettingsDrawer={toggleSettingsDrawer} />
      <main className={classes.main}>
        <RouterRender dashState={dashState} setDashState={setDashState} />
      </main>
      <Settings
        settingsOpen={dashState.settingsOpen}
        toggleSettingsDrawer={toggleSettingsDrawer}
        logoutFunc={logoutAndClearDashState}
      />
    </>
  );
};

Dashboard.propTypes = {
  // handleStateUpdate: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    token: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      firstname: PropTypes.string,
    }),
  }),
  logoutFunc: PropTypes.func,
};

Dashboard.defaultProps = {
  appState: {
    token: '',
    user: {
      id: '',
      firstname: 'No props received',
    },
  },
  logoutFunc() {
    console.log('No props received');
  },
};

export default Dashboard;
