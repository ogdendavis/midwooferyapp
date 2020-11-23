import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dogs = ({ breeder }) => {
  const [dogs, setDogs] = useState([]);
  const breederExists = Object.keys(breeder).length > 0;

  const loadDogs = async (breederId) => {
    const res = await fetch(
      `${process.env.API_BASE}/breeders/${breederId}/dogs`,
    );
    const data = res.status === 200 ? await res.json() : [];
    setDogs(data);
  };

  useEffect(() => {
    if (breederExists) {
      loadDogs(breeder.id);
    }
  }, [breeder]);

  // If no breeder is sent, return a message to that effect
  if (!breederExists) {
    return <div>No breeder active</div>;
  }

  const renderDogs = (
    <ul>
      {dogs.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>{`${breeder.firstname} ${breeder.lastname}'s Dogs`}</h1>
      {dogs.length > 0 ? renderDogs : <p>This breeder has no dogs</p>}
    </div>
  );
};

Dogs.propTypes = {
  breeder: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
};

export default Dogs;
