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

const Dashboard = (props) => {
  const { logoutFunc } = props;
  const [dashState, setDashState] = useState({
    activeTab: 0,
  });

  const setActiveTab = (e, val) => {
    setDashState({ ...dashState, activeTab: val });
  };

  return (
    <div>
      <Header
        logoutFunc={logoutFunc}
        activeTab={dashState.activeTab}
        setActiveTab={setActiveTab}
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
