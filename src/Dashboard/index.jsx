// Packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

// Components
import Header from './Components/Header';
import Settings from './Components/Settings';
import RouterRender from './Components/RouterRender';

// Helpers
import db from './_DataFetching';

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
    litters: [],
    dogs: [],
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

  // Load dogs and litters on initial dashboard load
  useEffect(async () => {
    // Use callback to prevent attempt to update state asynchronously after component unmounts
    let dashboardMounted = true;
    const dogs = await db.get.dogs(appState);
    const litters = await db.get.litters(appState);
    if (dashboardMounted) {
      setDashState({ ...dashState, dogs, litters });
    }
    return function () {
      dashboardMounted = false;
    };
  }, []);

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
