// Challenge / Exercise

//? 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//? 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//? 3. Add a root layout that adds the <MainNavigation> component above all page components
//? 4. Add properly working links to the MainNavigation
//? 5. Ensure that the links in MainNavigation receive an "active" class when active
//? 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//? 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

// React Router Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Import Roots Layouts Component
import Root from "./pages/Root.jsx";
import EventsRoot from "./pages/EventsRoot.jsx";

// Error Page Component
import ErrorPage from "./pages/ErrorPage.jsx";

// Import Page Components
import HomePage from "./pages/HomePage.jsx";
import EventsPage, {loader as pageLoader}  from "./pages/EventsPage.jsx";
import EventDetailPage, {loader as eventLoader} from "./pages/EventDetailPage.jsx";
import NewEventPage from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";


function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { 
          path: "events", 
          element: <EventsRoot />, 
          children: [
            { index: true, element: <EventsPage />, loader: pageLoader },
            { path: ":id", element: <EventDetailPage />, loader: eventLoader },
            { path: "new", element: <NewEventPage /> },
            { path: ":id/edit", element: <EditEventPage /> }
          ],
        },
        
      ]
    }
  ]);

  
  return (
    <RouterProvider router={router} />
  )
}

export default App;
