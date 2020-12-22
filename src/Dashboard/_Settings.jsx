import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { makeStyles, Button, Drawer } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    padding: '1rem',
  },
});

const Settings = (props) => {
  const { settingsOpen, toggleSettingsDrawer, logoutFunc } = props;
  const classes = useStyles();

  // Log out and return to login screen
  const history = useHistory();
  const completeLogout = () => {
    logoutFunc();
    history.push('/');
  };

  return (
    <Drawer anchor="right" open={settingsOpen} onClose={toggleSettingsDrawer}>
      <div className={classes.content}>
        <Button onClick={completeLogout}>Logout</Button>
      </div>
    </Drawer>
  );
};

Settings.propTypes = {
  settingsOpen: PropTypes.bool.isRequired,
  toggleSettingsDrawer: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired,
};

export default Settings;
