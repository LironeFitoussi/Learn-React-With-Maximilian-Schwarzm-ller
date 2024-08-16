import { Link, useNavigate } from 'react-router-dom';

// Tanstack Imports
// useMutation is used to perform a mutation and update the cache
import { useMutation } from '@tanstack/react-query';

// Component Imports
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

// Import the newEvents function
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  // Create a new mutation
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        { isPending && 'Submitting...' }
        { !isPending &&  (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )} 
      </EventForm>
      { isError && 
        <ErrorBlock 
          title="Failed to create event" 
          message={error?.info?.message || 'Failed to create event, please check your input and try again'} 
        />
      }
    </Modal>
  );
}
