import classes from './EventsNavigation.module.css';

import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/events', label: 'All Events', end: true },
  { to: '/events/new', label: 'Add Event' },
];
function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {routes.map(route => (
            <li key={route.to}>
              <NavLink 
                to={route.to} 
                end={route.end} 
                className={({isActive}) => isActive ? classes.active: undefined}
              >
                {route.label} 
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
