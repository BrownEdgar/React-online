import React from "react";


function Child({ title }) {
  return (
    <>
      {title ? <h1>{title.toUpperCase()}</h1> : null}
    </>
  )
}





export default Child;
