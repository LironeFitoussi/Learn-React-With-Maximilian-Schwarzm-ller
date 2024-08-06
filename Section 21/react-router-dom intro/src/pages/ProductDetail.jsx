import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export default function ProductDetail() {
    const { id } = useParams()
    return (
        <>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>

            {/* Go back Link */}
            <p>
                <Link to=".." relative="path"> Go back to Products </Link>
            </p>
        </>
    )
}