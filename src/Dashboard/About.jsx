import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  const { getDashState } = props;
  const dashState = getDashState();
  const { breeder } = dashState;

  return (
    <div>
      <h2>{`${breeder.firstname} ${breeder.lastname}`}</h2>
      <ul>
        <li>{`ID: ${breeder.id}`}</li>
        <li>{`email: ${breeder.email}`}</li>
      </ul>
    </div>
  );
};

About.propTypes = {
  getDashState: PropTypes.func.isRequired,
  // setDashState: PropTypes.func.isRequired,
};

export default About;
