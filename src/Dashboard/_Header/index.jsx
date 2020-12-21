import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import NavTabs from './NavTabs';

const useStyles = makeStyles(() => ({
  titleArea: {
    flexGrow: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
  },
}));

const Header = (props) => {
  const { logoutFunc, activeTab, setActiveTab } = props;
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className={classes.titleArea}>
          <Typography variant="h1" className={classes.title}>
            Midwoofery CMS Dashboard
          </Typography>
        </div>
        <IconButton aria-label="show user settings" onClick={logoutFunc}>
          <AccountCircle fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  logoutFunc: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Header;
