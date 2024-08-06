import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: "pr1", title: "Product 1" },
    { id: "pr2", title: "Product 2" },
    { id: "pr3", title: "Product 3" }
]

export default function Products() {
    return (
        <>
            <h1>Yhe Products Page</h1>
            <ul>
                {PRODUCTS.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>View Details: {product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}