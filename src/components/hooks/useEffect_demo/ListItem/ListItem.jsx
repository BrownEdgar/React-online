import React, { useEffect } from "react";

function ListItem({ elem, handleDelete }) {
  useEffect(() => {
    // => mounting menak arajin angam
    return () => {
      // => menak componentDidUnmount
      console.log("the end :(", elem.id);
    };

  }, []);



  return <li className='ListItem'>
    {elem.title}
    <button className='delete' onClick={() => handleDelete(elem.id)}>&#10006;</button>
  </li>;
}

export default ListItem;
