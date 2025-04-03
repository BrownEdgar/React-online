import React from "react";
import useArray from './useArray';

function App() {

  const { value, sort, add, setValue } = useArray({ length: 4, start: 34, end: 89 })
  return <div>
    <h1>{JSON.stringify(value)}</h1>
    <button onClick={sort}>sort</button>
    <button onClick={() => add(4, 5, 69)}>add</button>
  </div>;
}

export default App;





