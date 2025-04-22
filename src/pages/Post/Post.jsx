import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router';
import './Post.scss'
import Loader from "../../components/Loader/Loader";

function Post() {
  const [post, setpost] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const [haveError, setHaveError] = useState(false);

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (+id && id <= 100) {
      setisLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setpost(data))
        .finally(() => setisLoading(false))
    } else {
      setHaveError(true)
      setisLoading(false)
    }
  }, [id]);

  const goback = () => {
    navigate('/posts')
  }

  return <div className={`Post ${haveError ? 'Post__error' : ''}`}>
    <div className='Post__header'>
      <h1> POST N {id}</h1>
      <button onClick={goback}>All posts</button>
      <Link to={'/posts'}>All posts</Link>

    </div>
    <hr />


    {isLoading ? <Loader /> : (
      <>
        {haveError
          ? <p>No content</p>
          : (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          )
        }
      </>
    )}




  </div>;
}

export default Post;
