import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';
export default function EventsRoot() {
    return (
        <div>
            <h1>Events Root</h1>
            <EventsNavigation />
            <Outlet />
        </div>
    );
}