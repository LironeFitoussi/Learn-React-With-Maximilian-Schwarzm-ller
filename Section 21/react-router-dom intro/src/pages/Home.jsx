import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <p>
        <button onClick={handleNavigate}>Navigate to Products</button>
      </p>
    </div>
  )
}