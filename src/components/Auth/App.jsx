import React, { useEffect, useReducer, useState } from "react";
import AuthForm from '../AuthForm/AuthForm';
import reducer, { ACTIONTYPES, initialState } from './reducer';
import Users from '../Users/Users';
import { FaChair } from "react-icons/fa6";
import CarIcon from "../../assets/car.svg";
import MiningFilled from '../../Icons/MiningFilled';
import './App.css'

const DB_URL = import.meta.env.VITE_DB_URL

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPasswordIndex, setCurrentPasswordIndex] = useState(null);


  useEffect(() => {
    fetch(DB_URL)
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
    fetch(DB_URL, {
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
      <h1>
        <FaChair />
        index: {currentPasswordIndex}
      </h1>
      <img src={CarIcon} alt="" />
      <button> button     <MiningFilled /></button>
      <Users data={state.data} setValue={setCurrentPasswordIndex} index={currentPasswordIndex} />
    </div>
  );
}
