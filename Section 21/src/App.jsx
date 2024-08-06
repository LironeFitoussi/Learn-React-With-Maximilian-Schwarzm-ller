import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

// Importing Pages
import Root from "./pages/Root.jsx"
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'

// Error Page
import Error from './pages/Error.jsx'

// Importing the components // *Home* and *About* are the parts thats shows after the domain
const router = createBrowserRouter([
  { 
    path : '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
