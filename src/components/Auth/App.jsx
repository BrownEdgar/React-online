import React, { useEffect, useReducer } from "react";
import AuthForm from '../AuthForm/AuthForm';
import reducer, { ACTIONTYPES, initialState } from './reducer';
import Users from '../Users/Users';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => {
        return res.json()
      })
      .then(data => dispatch({ type: ACTIONTYPES.JSONSAVE, payload: data }))
  }, []);



  const handleSubmit = (values, formik) => {
    const user = {
      id: Date.now(),
      ...values
    }
    dispatch({ type: ACTIONTYPES.SAVE, payload: user })
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    formik.resetForm()
  }





  return (
    <div className='App'>
      <AuthForm handleSubmit={handleSubmit} />
      <Users data={state.data} />
    </div>
  );
}
