import React, { useState } from "react";
import './App.scss'

function App() {
  const [user, setuser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, username, password } = e.target;
    const o = {
      email: email.value,
      username: username.value,
      password: password.value,
    }
    setuser(o)
    e.target.reset()
  }

  return (
    <div className='App'>
      <h2>{JSON.stringify(user, null, 1)}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" required />
        <input type="text" name="username" id="username" required />
        <input type="password" name="password" id="password" required />
        <input type="submit" value="save" />
      </form>
    </div>
  );
}

export default App;
