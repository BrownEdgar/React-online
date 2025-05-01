import React, { useEffect } from 'react';
import axios from 'axios';

function Axios() {

useEffect(() => {

axios('https://jsonplaceholder.typicode.com/posts?_limit=20')
.then(rec => console.log(rec)
)

}, [])

  return (
    <div>
      
    </div>
  );
}

export default Axios;
