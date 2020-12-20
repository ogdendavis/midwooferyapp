import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Dashboard = (props) => {
  const { appState, logoutFunc } = props;
  const [dashState, setDashState] = useState({
    activeTab: 0,
  });

  const setActiveTab = (tab) => {
    setDashState({ ...dashState, activeTab: tab });
  };

  return (
    <div>
      <Header
        logoutFunc={logoutFunc}
        activeTab={dashState.activeTab}
        setActiveTab={setActiveTab}
      />
      <p>{`Hello, ${appState.user.firstname}!`}</p>
      <p>{`You are on tab ${dashState.activeTab}`}</p>
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
