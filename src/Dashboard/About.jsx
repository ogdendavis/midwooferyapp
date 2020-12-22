import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  const { dashState } = props;
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
  dashState: PropTypes.shape({
    settingsOpen: PropTypes.bool.isRequired,
    dogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    litters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
    breeder: PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    token: PropTypes.string.isRequired,
  }).isRequired,
  // setDashState: PropTypes.func.isRequired,
};

export default About;
