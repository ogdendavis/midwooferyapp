import React from 'react';
// import PropTypes from 'prop-types';

import { Route, Link } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';

const NavTabs = () => (
  <Route
    path="/dashboard"
    render={(history) => (
      <Tabs
        value={
          history.location.pathname !== '/' ? history.location.pathname : false
        }
        aria-label="Dashboard tabs"
      >
        <Tab
          label="Dashboard"
          value="/dashboard/home"
          component={Link}
          to="/dashboard/home"
        />
        <Tab
          label="Dogs"
          value="/dashboard/dogs"
          component={Link}
          to="/dashboard/dogs"
        />
        <Tab
          label="Litters"
          value="/dashboard/litters"
          component={Link}
          to="/dashboard/litters"
        />
        <Tab
          label="About Me"
          value="/dashboard/about"
          component={Link}
          to="/dashboard/about"
        />
      </Tabs>
    )}
  />
);

export default NavTabs;
