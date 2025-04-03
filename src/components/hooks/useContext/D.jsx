import React, { useContext } from "react";
import { MyContext } from './Contects';

function D() {
  const obj = useContext(MyContext)
  console.log(obj); //  { x: 12 }
  return <div>
    <h1>Component D</h1>
  </div>;
}

export default D;
