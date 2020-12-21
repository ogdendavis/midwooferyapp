import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs } from '@material-ui/core';

const NavTabs = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <Tabs value={activeTab} onChange={setActiveTab} aria-label="Dashboard tabs">
      <Tab label="Dashboard" id="tab-0" aria-controls="tabpanel-0" />
      <Tab label="Dogs" id="tab-1" aria-controls="tabpanel-1" />
      <Tab label="Litters" id="tab-2" aria-controls="tabpanel-2" />
      <Tab label="About Me" id="tab-3" aria-controls="tabpanel-3" />
    </Tabs>
  );
};

NavTabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default NavTabs;
