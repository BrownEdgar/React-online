import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import reduser, { ACTIONTYPES, initialValue } from './reduser'
import './App.css'



function App() {

  const [num, setnum] = useState(0)
  const [state, dispatch] = useReducer(reduser, initialValue, () => {
    return Array.from({ length: 10 }, () => Math.round(Math.random() * 1e3))
  })

  useEffect(() => {
    setnum(num + 1)
  }, [state])

  return <>
    <div>
      <h1>{num}</h1>
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={() => dispatch({ type: ACTIONTYPES.ADD, payload: 3 })}>Add</button>
      <button onClick={() => dispatch({ type: ACTIONTYPES.DELETE })}>Delete</button>
      <button onClick={() => dispatch({ type: ACTIONTYPES.SORT })}>Sort</button>
    </div>
  </>
}

export default App;
