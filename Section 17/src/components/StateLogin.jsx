import { useEffect, useState } from 'react';
import Input from './Input';

export default function Login() {
  //! Separate states:
  // const [ email, setEmail ] = useState("");
  // const [ password, setPassword ] = useState("");

  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didEdit.email && !userForm.email.includes('@');
  const passwordIsInvalid = didEdit.password && userForm.password.trim().length < 6;
  const emptyFields = Object.entries(didEdit).some(([key, value]) => value === false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');

    //? Validation
    if ( emptyFields ) {
      console.error("Please fill in all fields");
      return;
    }

    if (emailIsInvalid || passwordIsInvalid) {
      if (emailIsInvalid) {
        console.error("Invalid email");
      }

      if (passwordIsInvalid) {
        console.error("Invalid password");
      }
      return;
    }

    console.log("form:", {
      email: userForm.email,
      password: userForm.password
    })

    handleInputReset(e);
    setDidEdit({
      email: false,
      password: false
    });
  };

  function handleInputBlur(id) {
    const { name } = id.target;
    setDidEdit((prevValues) => ({
      ...prevValues,
      [name]: true
    }));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserForm((prevValues) => ({
      ...prevValues,
      [name]: value
    }));

    setDidEdit((prevValues) => ({
      ...prevValues,
      [name]: false
    }));
  }

  function handleInputReset(e) {
    e.preventDefault();
    setUserForm({
      email: '',
      password: ''
    });
  }

  // function handleEmailChange (e) {
  //   // console.log(e.target.value); //! Print value before state change sched
  //   setEmail(e.target.value)
  // };

  // function handlePasswordChange (e) {
  //   // console.log(e.target.value); //! Print value before state change sched
  //   setPassword(e.target.value)
  // };

  //? Validation to demonstrate user data has changed, (print based on targettet states change dependencies)
  // useEffect(() => {
  //   console.log("form:", {
  //     email: userForm.email,
  //     password: userForm.password
  //   })
  // }, [userForm])

  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label='Email'
          id="email"
          type="email"
          name="email"
          onChange={handleInputChange}
          value={userForm.email}
          onBlur={handleInputBlur}
          error={emailIsInvalid && "Please enter a valid email address"}
        />
        <Input
          label='Password'
          id="password"
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userForm.password}
          onBlur={handleInputBlur}
          error={passwordIsInvalid && "Password must be at least 6 characters long"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleInputReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
