
import { useReducer } from 'react';
import reducer, { ACTIOINTYPES, initialValue } from './reducer.js';
import './App.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return <div className='App'>
    <h1>{state}</h1>
    <button onClick={() => dispatch({ type: ACTIOINTYPES.PLUS, payload: 7 })}>Add count</button>
    <button onClick={() => dispatch({ type: ACTIOINTYPES.ZERO })}>zero</button>
    <button onClick={() => dispatch({ type: ACTIOINTYPES.MINUS, payload: 1 })}>minus count</button>
    <button onClick={() => dispatch({ type: ACTIOINTYPES.RANDOM })}>random</button>
  </div>;
}
export default App