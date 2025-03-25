import { useState } from "react";
import React from "react";
import './App.css';

function App() {
  const [image] = useState([
    {
      id: 1,
      image: "./images/audi.avif",
      name: "Audi",
      price: 45456
    },
    {
      id: 2,
      image: "./images/bmw.avif",
      name: "BMW",
      price: 58700
    },
    {
      id: 3,
      image: "./images/mercedes benz.avif",
      name: "Mercedes Benz",
      price: 49500
    }
  ]);

  return <div className="box">
    <h1>Cost in stoc</h1>

    {
      image.map(elem => {
        return (
          <div className="child" key={elem.id}>
            <img src={elem.image} alt={elem.name} />
            <h2>{elem.name}</h2>
            <h3>Price: {elem.price}</h3>
          </div>
        )
      })
    }

  </div>
}
export default App;
