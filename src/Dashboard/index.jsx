import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const Dashboard = (props) => {
  const { appState, logoutFunc } = props;
  return (
    <div>
      {`Hello, ${appState.user.firstname}!`}
      <Button variant="outlined" size="small" onClick={logoutFunc}>
        Logout
      </Button>
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
