import { useParams } from "react-router-dom";

export default function EditEventPage() {
    const {id} = useParams();
    return (
        <>
            <h1>Edit Event Page</h1>
            <p>Selected Event ID: {id}</p>
        </>
    );
}