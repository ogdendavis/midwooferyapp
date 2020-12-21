import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  const { breeder } = props;
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
  breeder: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  // setBreeder: PropTypes.func.isRequired,
};
export default About;
