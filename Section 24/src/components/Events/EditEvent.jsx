import { Link, redirect, useNavigate, useParams, useSubmit, useNavigation} from 'react-router-dom';
import { 
  useQuery, 
  // useMutation 
} from '@tanstack/react-query';

// Import the fetchEvent function
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
// import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { id } = useParams();
  const submit = useSubmit();

  const { 
    data, 
    // isPending,  isError, error
  } = useQuery({
    queryKey: ['events', { id }],
    queryFn: ({signal}) => fetchEvent({signal, id}),
    staleTime: 10000,
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     // 1. get the current event data from the cache
  //     const newEvent = data.event;

  //     // 2. cancel any outgoing queries with the same key
  //     await queryClient.cancelQueries({ queryKey: ['events', { id }] });

  //     // 3. save the previous event data in a snapshot
  //     const previousEvent = queryClient.getQueryData(['events', { id }]);

  //     // 4. set the new event data in the cache
  //     queryClient.setQueryData(['events', { id }], newEvent);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     // 5. rollback to the previous event data
  //     queryClient.setQueryData(['events', { id }], context.previousEvent);
  //   },

  //   // 6. once the mutation is done, invalidate the event query
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ['events', { id }] });
  //   }
  // });

  function handleSubmit(formData) {
    // mutate({ id, event: formData });
    // navigate('../');
    submit( formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className='center'>
  //       <LoadingIndicator />
  //     </div>
  //   )
  // }

  // if (isError) {
  //   content = (
  //     <>
  //       <ErrorBlock 
  //         title="Failed to load event" 
  //         message={error.message?.info || 
  //         'Failed to load event, please check your inputs and try again later'} />
  //       <div className='form-actions'>
  //         <Link to="../" className='button'> Okay </Link>
  //       </div>
  //     </>
  //   )
  // }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        { state === 'submitting' ? <p>Sending data...</p> : 
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        }
      </EventForm>
    )
  }


  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id ],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params}) {
  const formData = await request.formData()
  const updatedEvent = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEvent });
  await queryClient.invalidateQueries(['events', { id: params.id }]);
  return redirect('../');
};