import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <div>{data.message}</div>;
  // }
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Failed to fetch events.' },
      { status: 404 }
    );
  }
  return response;
};

export { loader };