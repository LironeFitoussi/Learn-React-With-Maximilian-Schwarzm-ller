import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
];

function MainNavigation() {
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

export default MainNavigation;
