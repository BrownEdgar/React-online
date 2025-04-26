import './Post.scss'
import React from "react";
import { useParams } from 'react-router';
import useFetchData from '../../components/hooks/useFetchData';

function Post() {
  const { id } = useParams()

  const [data, isloading] = useFetchData({ url: `https://jsonplaceholder.typicode.com/posts/${id}` })

  return <div>
    <h1>POST N {id} </h1>
    <div className="Post">
      {
        !isloading && data ? (
          <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </>
        ) : <p>Loading...</p>}
    </div>
  </div>;
}

export default Post;
