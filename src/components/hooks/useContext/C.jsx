import React, { useContext } from "react";
import { MyContext } from './Contects';

function C() {

  const obj = useContext(MyContext)
  console.log(obj); //  { x: 12 }

  return <div>
    <h1>Component </h1>
    <button >click</button>


  </div>;
}

export default C;