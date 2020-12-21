import React, { useState } from 'react';
import PropTypes from 'prop-types';

// "Pages"
import Home from './Home';
import Dogs from './Dogs';
import Litters from './Litters';
import About from './About';

// Components
import Header from './_Header';
import TabPanel from './_TabPanel';
import Settings from './_Settings';

const Dashboard = (props) => {
  const { logoutFunc } = props;
  const [dashState, setDashState] = useState({
    activeTab: 0,
    settingsOpen: false,
  });

  const setActiveTab = (e, val) => {
    setDashState({ ...dashState, activeTab: val });
  };

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
      <TabPanel activeTab={dashState.activeTab} index={0}>
        <Home />
      </TabPanel>
      <TabPanel activeTab={dashState.activeTab} index={1}>
        <Dogs />
      </TabPanel>
      <TabPanel activeTab={dashState.activeTab} index={2}>
        <Litters />
      </TabPanel>
      <TabPanel activeTab={dashState.activeTab} index={3}>
        <About />
      </TabPanel>
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
  // appState: PropTypes.shape({
  //   token: PropTypes.string.isRequired,
  //   user: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     firstname: PropTypes.string.isRequired,
  //   }),
  // }).isRequired,
  logoutFunc: PropTypes.func.isRequired,
};

export default Dashboard;
