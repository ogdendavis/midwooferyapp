import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => {
  const [dogs, setDogs] = useState([]);

  const loadDogs = async () => {
    const res = await fetch(`${process.env.API_BASE}/dogs`);
    const data = await res.json();
    setDogs(data);
  };

  useEffect(() => {
    loadDogs();
  }, []);

  const dogList = dogs.map((d) => <li key={d.id}>{d.name}</li>);

  return (
    <div>
      <h1>{title}</h1>
      <ul>{dogList}</ul>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
