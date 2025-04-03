import React, { useState } from "react";
import { MyContext } from './Contects';
import A from './A';

import './App.css'
import D from './D';

function App() {

  return <div>
    <h1>APP COMPONENT</h1>
    <MyContext value={{ data: [{ a: 1 }, { b: 2 }] }}>
      <A />
      <D />
    </MyContext>

  </div>;
}

export default App;
