import { useRef, useState } from "react";

export default function Login() {
  // const email = useRef();
  // const password = useRef();


  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const enteredEmail = email.current.value;
  //   const enteredPassword = password.current.value
  //   console.log(enteredEmail, enteredPassword)
  // }

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  })

  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInValid = isEdit.email && !enteredValue.email.includes('@')
  function handleSubmit(event) {
    event.preventDefault()
    console.log(enteredValue)
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevState) => ({
      ...prevState,
      [identifier]: value
    }))
    setIsEdit((preEdit) => ({
      ...preEdit,
      [identifier]: false
    }))
  }

  function handleBlur(identifier) {
    setIsEdit((prevState) => ({
      ...prevState,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          {/* <input
            id="email"
            type="email"
            name="email"
            ref={email} /> */}
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValue.email}
            onBlur={() => handleBlur('email')}
            onChange={(event) => handleInputChange('email', event.target.value)} />
          {emailIsInValid && <p>email is invalid</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          {/* <input
            id="password"
            type="password"
            name="password"
            ref={password}
          /> */}
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValue.password}
            onChange={(event) => handleInputChange('password', event.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
