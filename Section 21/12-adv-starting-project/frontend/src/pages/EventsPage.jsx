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
    // return resData.events;
    const res = new Response('any data', {
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // return res;
    return response;
  }
};

export { loader };