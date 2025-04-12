import React, { useEffect, useState } from "react";
import './Cars.css'

function Cars() {
  const [data, setData] = useState([
    { id: 1, name: '🚕', color: 'yellow', price: 5800 },
    { id: 2, name: '🚌', color: 'yellow', price: 25800 },
    { id: 3, name: '🚑', color: 'white', price: 18000 },
    { id: 4, name: '🚒', color: 'red', price: 35900 },
    { id: 5, name: '🚔', color: 'black', price: 43000 },
    { id: 6, name: '🚛', color: 'green', price: 43000 },
  ]);

  const [filteredArray, setfilteredArray] = useState([]);
  const [currentColor, setcurrentColor] = useState('');


  useEffect(() => {
    if (currentColor) {
      setfilteredArray(data.filter(car => car.color === currentColor))
    } else {
      setfilteredArray(data)
    }
  }, [currentColor, data]);




  const getColors = () => {
    return data.reduce((acc, next) => {
      if (!acc.includes(next.color)) {
        acc.push(next.color)
      }
      return acc
    }, [])
  }

  const handleClick = (e) => {
    const { tagName, dataset } = e.target
    if (tagName === 'BUTTON') {
      setcurrentColor(dataset.color);
    }
  }
  const handleChange = (e) => {
    setcurrentColor(e.target.value);
  }
  const handleSort = (e) => {
    setfilteredArray(filteredArray.toSorted((a, b) => a.price - b.price))
  }

  return (
    <div className="App">
      <div className="buttons" onClick={handleClick}>
        {
          getColors().map(color => <button
            key={color}
            className={currentColor === color ? `active ${color}` : ''}
            data-color={color}>
            {color}
          </button>)
        }

        {currentColor ? <p className='clear' onClick={() => setcurrentColor('')}>Clear filters</p> : null}
      </div>

      <hr />
      <div className="buttons">
        <select name="colors" id="colors" onChange={handleChange} defaultValue={currentColor}>
          {
            getColors().map(color => <option value={color} key={color}>{color}</option>)
          }
        </select>
        <button onClick={handleSort} disabled={filteredArray.length < 2}>SORT</button>
      </div>

      <div className='Cars'>
        {
          filteredArray.map(elem => (
            <div key={elem.id}>
              <h1>{elem.name}</h1>
              <p>color: {elem.color}</p>
              <p>price: {elem.price}</p>
            </div>
          ))
        }
      </div>
    </div>


  );
}

export default Cars;
