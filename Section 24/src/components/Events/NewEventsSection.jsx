import { useEffect, useState } from 'react';

// Tanstack Imports
import { useQuery } from '@tanstack/react-query';

// Component Imports
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

// Import the fetchEvents function
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  const { data, isPending, isError, error} = useQuery({
    queryKey: ["events", { max: 3 }], 
    queryFn: ({ signal, queryKey }) => fetchEvents({signal, ...queryKey[1]}),
    staleTime: 0, // Disable stale time, always fetch the latest data if set to 5000 it will fetch the data after 5 seconds
    //! gcTime: 1000, // Garbage collection time, if set to 1000 it will remove the cache after
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error?.info?.message || "An Error Ocured"} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
