import { useState, useEffect } from 'react';
import Posts from './Posts/Posts';

import './App.css'

function App() {
  const [data, setData] = useState([])

  const handleDelete = (id) => {
    const x = data.filter(elem => elem.id !== id);
    setData(x)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`)
      const x = await response.json()
      setData(x)
    }
    fetchData()
  }, [])



  return <div >
    <h1 className='title'>Fetch data in React</h1>
    <Posts data={data} handleDelete={handleDelete} />
    <hr />
  </div>
}

export default App;
