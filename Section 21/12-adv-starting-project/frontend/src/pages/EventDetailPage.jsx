import { useParams, json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EditDetailPage() {
    const data = useLoaderData();
    const event = data.event;
    return (
        <EventItem event={event} />
    );
}

export async function loader({ request, params }) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`);
   
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch data' },
            { status: 500 }
        );
    } else {
        return response; 
    }
}