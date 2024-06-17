import Input from './Input';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailError } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const { value: passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordError } = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));


  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');

    if (emailError || passwordError) {
      return;
    }

    console.log('Sending http request...');
    console.log('form:', { email: emailValue, password: passwordValue });
  };

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label='Email'
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailError && "Please enter a valid email address"}
        />
        <Input
          label='Password'
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordError && "Password must be at least 6 characters long"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
