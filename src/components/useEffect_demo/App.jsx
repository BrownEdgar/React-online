import { useState } from 'react';

import './App.css'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=16')
    const x = await response.json()
    setData(x)
  }


  return <div >
    <h1 className='title'>Fetch data in React</h1>
    <h1>Our POSTS</h1>
    <button onClick={fetchData}>get POSTS</button>
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
