import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function EditDetailPage() {
    const {id} = useParams();

    return (
        <>
            <h1>Edit Detail Page</h1>
            <p>Selected Event ID: {id}</p>

            {/* Go Back */}
            <Link to=".." relative="path" >Go Back</Link> 
        </>
    );
}