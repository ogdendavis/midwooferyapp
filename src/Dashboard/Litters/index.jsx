import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LitterCard from './_LitterCard';

const Litters = (props) => {
  const { getDashState, setDashState } = props;
  const dashState = getDashState();
  const { token, breeder, litters } = dashState;

  const loadLitters = async () => {
    const reqDeets = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await fetch(
      `${process.env.API_BASE}/breeders/${breeder.id}/litters`,
      reqDeets,
    );
    const data = res.status === 200 ? await res.json() : [];
    setDashState({ ...dashState, litters: data });
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
  getDashState: PropTypes.func.isRequired,
  setDashState: PropTypes.func.isRequired,
};

export default Litters;
