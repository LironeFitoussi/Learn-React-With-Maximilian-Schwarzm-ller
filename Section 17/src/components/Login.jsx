import { useRef } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');
    const userForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    console.log("form:", userForm);
    handleResetFields(e);
  };

  function handleResetFields(e) {
    e.preventDefault();
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} id="email" type="email" name="email"/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} id="password" type="password" name="password"/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
