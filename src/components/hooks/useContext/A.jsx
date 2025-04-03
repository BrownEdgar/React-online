import React from "react";
import B from './B';

function A() {
  console.log("A render");

  return <div>
    <h1>Component A</h1>
    <B />
  </div>;
}

export default A;
