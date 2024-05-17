import {
  useDispatch,
} from "react-redux";

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

console.log(authActions);
const Auth = () => {
  const dispatch = useDispatch();
  const handleAuth = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // checkif email and password are empty
    if (email.trim() === '' || password.trim() === '') {
      return;
    }
    
    // checkif email and password are equal to 'test@test' and 'test'
    if (email !== 'test@test' || password !== 'test') {
      return;
    }
    
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleAuth}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name="email"/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name="password"/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
