import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Button, Drawer } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    padding: '1rem',
  },
});

const Settings = (props) => {
  const { settingsOpen, toggleSettingsDrawer, logoutFunc } = props;
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={settingsOpen} onClose={toggleSettingsDrawer}>
      <div className={classes.content}>
        <Button onClick={logoutFunc}>Logout</Button>
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
