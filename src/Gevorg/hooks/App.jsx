import { useState } from 'react'
import { useReducer } from 'react'
import reduser, { ACTIONTYPES, initialValue } from './reduser'
import './App.css'



 function App() {
   
     const [num, setnum] = useState(1)

     const addCount = () => {
       console.log(setnum(num + 1));
       
     }

    const [state, dispatch] = useReducer(reduser, initialValue)

    
    return <><div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type: ACTIONTYPES.ADD, payload: 3})}>Add</button>
        <button onClick={() => dispatch({type:ACTIONTYPES.DELETE})}>Delete</button>
        <button onClick={() => dispatch({type:ACTIONTYPES.SORT})}>Sort</button>
    </div>
    <button onClick={addCount}>count</button>
    </>
}

export default App;
