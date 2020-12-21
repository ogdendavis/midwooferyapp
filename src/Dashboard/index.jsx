import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

// "Pages"
import Home from './Home';
import Dogs from './Dogs';
import Litters from './Litters';
import About from './About';

// Components
import Header from './_Header';
import TabPanel from './_TabPanel';
import Settings from './_Settings';

const useStyles = makeStyles({
  main: {
    padding: '1rem',
  },
});

const Dashboard = (props) => {
  const { logoutFunc, appState } = props;
  const classes = useStyles();

  const initialState = {
    activeTab: 0,
    settingsOpen: false,
    dogs: [],
    litters: [],
    breeder: appState.user,
  };
  const [dashState, setDashState] = useState(initialState);

  const setActiveTab = (e, val) => {
    setDashState({ ...dashState, activeTab: val });
  };

  const setDogs = (val) => {
    setDashState({ ...dashState, dogs: val });
  };

  const setLitters = (val) => {
    setDashState({ ...dashState, litters: val });
  };

  // const setBreeder = (val) => {
  //   setDashState({ ...dashState, breeder: val });
  // };

  const toggleSettingsDrawer = () => {
    setDashState({ ...dashState, settingsOpen: !dashState.settingsOpen });
  };

  return (
    <div>
      <Header
        logoutFunc={logoutFunc}
        activeTab={dashState.activeTab}
        setActiveTab={setActiveTab}
        toggleSettingsDrawer={toggleSettingsDrawer}
      />
      <main className={classes.main}>
        <TabPanel activeTab={dashState.activeTab} index={0}>
          <Home />
        </TabPanel>
        <TabPanel activeTab={dashState.activeTab} index={1}>
          <Dogs
            token={appState.token}
            breederId={appState.user.id}
            dogs={dashState.dogs}
            setDogs={setDogs}
          />
        </TabPanel>
        <TabPanel activeTab={dashState.activeTab} index={2}>
          <Litters
            token={appState.token}
            breederId={appState.user.id}
            litters={dashState.litters}
            setLitters={setLitters}
          />
        </TabPanel>
        <TabPanel activeTab={dashState.activeTab} index={3}>
          <About breeder={dashState.breeder} />
        </TabPanel>
      </main>
      <Settings
        settingsOpen={dashState.settingsOpen}
        toggleSettingsDrawer={toggleSettingsDrawer}
        logoutFunc={logoutFunc}
      />
    </div>
  );
};

Dashboard.propTypes = {
  // handleStateUpdate: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    token: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
    }),
  }).isRequired,
  logoutFunc: PropTypes.func.isRequired,
};

export default Dashboard;
