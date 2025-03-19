import { useState } from "react";
import React from "react";



function App() {

  const [name, setname] = useState("Ani")

  return <div className='App'>
    <h1>{name}</h1>
  </div>;
}

export default App;
