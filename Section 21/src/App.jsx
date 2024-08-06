import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

// Importing the Pages
import Home from './pages/Home'
import Products from './pages/Products'


// Importing the components // *Home* and *About* are the parts thats shows after the domain
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
])


function App() {
  return <RouterProvider router={router} />
}

export default App
