import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, IconButton, Toolbar } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import NavTabs from './NavTabs';

const useStyles = makeStyles(() => ({
  spacer: {
    flexGrow: 1,
  },
  toolbar: {
    alignItems: 'flex-end',
  },
}));

const Header = (props) => {
  const { activeTab, setActiveTab, toggleSettingsDrawer } = props;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={classes.spacer} />
        <IconButton
          aria-label="show user settings"
          onClick={toggleSettingsDrawer}
        >
          <AccountCircle fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  toggleSettingsDrawer: PropTypes.func.isRequired,
};

export default Header;
