import EventsList from '../components/EventsList';

function EventsPage() {
  return (
    <>
      <EventsList />
    </>
  );
}

export default EventsPage;

const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    /// ...later
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export { loader };