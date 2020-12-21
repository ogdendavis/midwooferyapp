import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { activeTab, children, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {activeTab === index && children}
    </div>
  );
};

TabPanel.propTypes = {
  activeTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default TabPanel;
