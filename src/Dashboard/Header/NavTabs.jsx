import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const NavTabs = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <Button
      onClick={() => {
        setActiveTab(10);
      }}
    >
      {activeTab}
    </Button>
  );
};

NavTabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default NavTabs;
