import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ breeders, isVisible, setbreederId }) => {
  const breederList = breeders.map((b) => (
    <li key={b.id}>
      <button
        type="button"
        onClick={() => {
          setbreederId(b.id);
        }}
      >
        {`${b.firstname} ${b.lastname}`}
      </button>
    </li>
  ));

  return (
    <div>
      {isVisible && (
        <>
          <p>Who are you?</p>
          <ul>{breederList}</ul>
        </>
      )}
    </div>
  );
};

Login.propTypes = {
  breeders: PropTypes.arrayOf(PropTypes.object).isRequired,
  isVisible: PropTypes.bool.isRequired,
  setbreederId: PropTypes.func.isRequired,
};

export default Login;
