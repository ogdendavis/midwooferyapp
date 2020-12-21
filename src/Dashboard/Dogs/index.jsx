import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import DogCard from './_DogCard';

const Dogs = (props) => {
  const { token, breederId, dogs, setDogs } = props;

  const loadDogs = async () => {
    const reqDeets = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(
      `${process.env.API_BASE}/breeders/${breederId}/dogs`,
      reqDeets,
    );
    const data = res.status === 200 ? await res.json() : [];
    setDogs(data);
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
  token: PropTypes.string.isRequired,
  breederId: PropTypes.string.isRequired,
  dogs: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  setDogs: PropTypes.func.isRequired,
};

export default Dogs;
