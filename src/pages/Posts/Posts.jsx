import React from 'react';
import useFetchData from '../../components/hooks/CostomHooks/useFatchData';
import { Link } from 'react-router';
import './Posts.scss'


function Posts() {

const [data] = useFetchData({url: 'https://jsonplaceholder.typicode.com/posts?_limit=20' })
console.log(data);

  return (
    <div className='Posts'>
      <h1>POsts page</h1>
      <div className='Posts__list'>
        <ol>
      {
        data?.map(post => {
          return <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        })
      }    
        </ol>
      </div>
    </div>
  );
}

export default Posts;
