import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import DogCard from './_DogCard';

const Dogs = (props) => {
  const { dashState, setDashState } = props;
  const { token, breeder, dogs } = dashState;

  const loadDogs = async () => {
    const reqDeets = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(
      `${process.env.API_BASE}/breeders/${breeder.id}/dogs`,
      reqDeets,
    );
    const data = res.status === 200 ? await res.json() : [];
    setDashState({ ...dashState, dogs: data });
  };

  useEffect(() => {
    if (dogs.length === 0) {
      loadDogs();
    }
  }, []);

  const dogInfo = dogs.map((d) => <DogCard key={d.id} dog={d} />);

  return <div>{dogInfo}</div>;
};

Dogs.propTypes = {
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
    }),
    token: PropTypes.string.isRequired,
  }).isRequired,
  setDashState: PropTypes.func.isRequired,
};

export default Dogs;
