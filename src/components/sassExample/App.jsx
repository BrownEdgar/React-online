
import { useReducer, useState } from 'react';
import './App.scss'

// state = 1
function reducer(state, action) {
  switch (action) {
    case 'plus':
      return state + 1
    case 'minus':
      return state - 1
    case 'zero':
      return 0
    default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 1);




  return <div className='App'>
    <h1>{state}</h1>
    <button onClick={() => dispatch('plus')}>Add count</button>
    <button onClick={() => dispatch('zero')}>zero</button>
    <button onClick={() => dispatch('minus')}>minus count</button>
  </div>;
}
export default App