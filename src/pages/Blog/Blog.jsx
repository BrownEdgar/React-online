import React from "react";
import './Blog.scss'
import { Link } from 'react-router';

export default function Blog() {
  return (
    <div className='Blog'>
      <h1>Blog Page</h1>
      <Link to={'/'}>Go home</Link>
    </div>
  );
}
