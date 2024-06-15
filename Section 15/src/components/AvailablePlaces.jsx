import React, { useEffect, useState } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places') || [];

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => response.json())
      .then(({places}) => {
        setAvailablePlaces(places);
        localStorage.setItem('places', JSON.stringify(places));
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}