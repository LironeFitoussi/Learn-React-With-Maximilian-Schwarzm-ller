import { useEffect, useState } from 'react';

export default function Login() {
  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });
  
  //! Separate states:
  // const [ email, setEmail ] = useState("");
  // const [ password, setPassword ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submited');

    console.log("form:", {
      email: userForm.email,
      password: userForm.password
    })

    handleInpurReset(e);
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserForm((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  }

  function handleInpurReset(e) {
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
          <input id="email" type="email" name="email" onChange={handleInputChange} value={userForm.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleInputChange} value={userForm.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleInpurReset}>Reset</button>
        <button className="button"  onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
