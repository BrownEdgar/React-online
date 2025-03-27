import { useEffect, useReducer } from 'react';
import MainTable from './components/MainTable/MainTable';
import reducer, { ACTIONTYPES, initialState } from './components/MainTable/reducer';

import './App.scss'

function App() {
  const [users, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json();
      dispatch({ type: ACTIONTYPES.SAVE, payload: data.users })
    }
    fetchData()
  }, []);

  return <div className='App'>
    <h1>Develop branch</h1>
    <div className="buttons">
      <button onClick={() => dispatch({ type: ACTIONTYPES.SORT, payload: { field: "email" } })}>Sort by firstName</button>
    </div>
    <MainTable users={users} dispatch={dispatch} />

  </div>;
}

export default App