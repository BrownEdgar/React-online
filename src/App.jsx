import { useState } from 'react';
import List from './components/List/List';

import './App.css'

function App() {
  const [cities, setCities] = useState(['Vanadzor', "Yerevan", "Gyumri"]);

  function deleteCity() {
    // setCities(cities.slice(0, -1))
    setCities(cities.toSpliced(-1, 1))
  }

  return (
    <div className='App'>
      <h1 className="title">React List</h1>
      <List data={cities} deleteCity={deleteCity} />
    </div>
  )
}

export default App




