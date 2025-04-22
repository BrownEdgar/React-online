import React, { useEffect, useState } from "react";
import { Link } from 'react-router';
import './Posts.scss'


function Posts() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
      const data = await response.json()
      setdata(data)
    }
    fetchData()
  }, []);



  return <div>
    <h1>Our Posts</h1>
    <div className="flex">
      {data.map(post => {
        return (
          <div className="flex__item" key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </div>
        )
      })}
    </div>
  </div>;
}


export const AboutLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  const data = await response.json()
  return data
}
export default Posts;
