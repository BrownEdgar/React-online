import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import { Outlet } from 'react-router';
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
