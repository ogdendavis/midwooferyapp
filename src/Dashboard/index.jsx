import React, { useState, useEffect } from 'react';
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
  const { logoutFunc, getAppState } = props;
  const appState = getAppState();
  const classes = useStyles();

  const initialState = {
    settingsOpen: false,
    dogs: [],
    litters: [],
    breeder: appState.user,
    token: appState.token,
  };
  const [dashState, setDashState] = useState(
    JSON.parse(localStorage.getItem('dashState')) || initialState,
  );

  // Every time we update dashState, it's going into localStorage
  // So get it out of localStorage, so data persists on reload
  const getDashState = () => JSON.parse(localStorage.getItem('dashState')) || dashState;

  // Save dashState in localStorage every time it is changed
  useEffect(() => {
    localStorage.setItem('dashState', JSON.stringify(dashState));
  }, [dashState]);

  // Add clearing dashstate to logoutFunc
  const logoutAndClearDashState = async () => {
    await logoutFunc();
    await setDashState({ initialState });
  };

  const toggleSettingsDrawer = () => {
    setDashState({ ...dashState, settingsOpen: !dashState.settingsOpen });
  };

  return (
    <>
      <Header toggleSettingsDrawer={toggleSettingsDrawer} />
      <main className={classes.main}>
        <RouterRender getDashState={getDashState} setDashState={setDashState} />
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
  getAppState: PropTypes.func,
  logoutFunc: PropTypes.func,
};

Dashboard.defaultProps = {
  getAppState() {
    console.log('No getAppState received in Dashboard/index');
  },
  logoutFunc() {
    console.log('No logoutFunc received in Dashboard/index');
  },
};

export default Dashboard;
