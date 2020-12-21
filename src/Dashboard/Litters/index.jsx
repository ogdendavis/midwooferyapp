import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LitterCard from './_LitterCard';

const Litters = (props) => {
  const { token, breederId, litters, setLitters } = props;

  const loadLitters = async () => {
    const reqDeets = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(
      `${process.env.API_BASE}/breeders/${breederId}/litters`,
      reqDeets,
    );
    const data = res.status === 200 ? await res.json() : [];
    setLitters(data);
  };

  useEffect(() => {
    if (litters.length === 0) {
      loadLitters();
    }
  }, []);

  const litterInfo = litters.map((l) => <LitterCard key={l.id} litter={l} />);

  return <div>{litterInfo}</div>;
};

Litters.propTypes = {
  token: PropTypes.string.isRequired,
  breederId: PropTypes.string.isRequired,
  litters: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  setLitters: PropTypes.func.isRequired,
};

export default Litters;
