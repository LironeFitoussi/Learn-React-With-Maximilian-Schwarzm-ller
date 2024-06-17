import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInalid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');
    const userForm = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    const validEmail = userForm.email.includes('@');

    if (!validEmail) {
      setEmailIsInalid(true);
      return;
    }
    
    setEmailIsInalid(false);

    // console.log("form:", userForm);
    console.log('Sending http request...');

    setTimeout(() => {
      handleResetFields(e);
      console.log('Logged in!');
    }, 3000);
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
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
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
