import React, { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAvailablePlaces() {
      try {
        const res = await fetch('http://localhost:3000/placessss');
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error('Failed to fetch available places');
        }

        setAvailablePlaces(data.places);
      } catch (error) {
        console.error('Error fetching available places:', error);
        setError(error);
      }

      setIsLoading(false);
    }

    fetchAvailablePlaces();
  }, []);


  if (error) {
    return (
      <Error title="An error occurred!" message={error.message || 'Could not fetch places, please try again later.'}/>
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading available places..."
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
