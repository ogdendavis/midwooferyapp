import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Login from '../Login';
import Dogs from '../Dogs';

const App = () => {
  // Initial state setup
  const [breederId, setbreederId] = useState(false);
  const [breeders, setBreeders] = useState([]);
  const [activeBreeder, setActiveBreeder] = useState({});

  // Helper functions
  const loadBreeders = async () => {
    const res = await fetch(`${process.env.API_BASE}/breeders`);
    const data = await res.json();
    setBreeders(data);
  };

  const loadActiveBreeder = async () => {
    const res = await fetch(`${process.env.API_BASE}/breeders/${breederId}`);
    const data = await res.json();
    setActiveBreeder(data);
  };

  // Effect on initial load
  useEffect(() => {
    loadBreeders();
  }, []);

  // Effect when breeder is logged in
  useEffect(() => {
    if (breederId === false) {
      setActiveBreeder({});
      return;
    }
    loadActiveBreeder(breederId);
  }, [breederId]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setbreederId(false);
          setActiveBreeder({});
        }}
      >
        Reset
      </button>
      <Login
        breeders={breeders}
        isVisible={!breederId}
        setbreederId={setbreederId}
      />
      <Dogs breeder={activeBreeder} />
    </div>
  );
};

export default App;
