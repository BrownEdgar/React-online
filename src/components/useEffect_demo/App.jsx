import { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [data, setData] = useState([])

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Componenty cnvec!!!");
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`)
      const x = await response.json()
      setData(x)
    }
    fetchData()
    return () => {
      console.log("Hajox");
    }
  }, [])



  return <div >
    <h1 className='title'>Fetch data in React</h1>
    <h1>Our POSTS</h1>
    <h1>count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>add count</button>
    <hr />
    <ul className='List'>
      {
        data.map(elem => {
          return <li key={elem.id}>{elem.title}</li>
        })
      }
    </ul>


  </div>
}

export default App;
