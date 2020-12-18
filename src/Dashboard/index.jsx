import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const { appState } = props;
  return <div>{`Hello, ${appState.user.firstname}!`}</div>;
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
};

export default Dashboard;
