import { useEffect, useState } from 'react';

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');

    //? Validation
    if (emailIsInvalid) {
      console.error("Invalid email");
      return;
    }

    console.log("form:", {
      email: userForm.email,
      password: userForm.password
    })

    handleInputReset(e);
  };

  function handleInputBlur(id) {
    const {name} = id.target;
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={userForm.email}
            onBlur={handleInputBlur}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userForm.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleInputReset}>Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
