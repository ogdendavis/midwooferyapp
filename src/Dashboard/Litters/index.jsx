import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LitterCard from './_LitterCard';

const Litters = (props) => {
  const { dashState, setDashState } = props;
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

export default Litters;
