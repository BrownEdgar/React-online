import './App.css'
import React from "react";
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
