import React, { useState } from "react";
import Box from './Box/Box';

function App() {
  const [data] = useState([
    {
      id: 1,
      name: "Indian Gay",
      image: './images/photo1.jpg'
    },
    {
      id: 2,
      name: "Korea",
      image: './images/photo2.jpg'
    }
  ]);

  return <div className='App'>
    <h1 className="title">Multi Component</h1>
    <div>
      {
        data.map(elem => {
          return (
            <figure key={elem.id}>
              <img src={elem.image} alt={elem.name} />
              <figcaption>{elem.name}</figcaption>
            </figure>
          )
        })
      }
    </div>

    <Box variant='dark' title="example1" />
    <Box variant='dark' title="example2" block />
    <Box variant='light' title="example3" />
  </div>;
}

export default App;
