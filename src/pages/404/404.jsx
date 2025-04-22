import React from "react";
import { Link } from 'react-router';

function ErrorPage() {
  return <div>
    <h1>404 | page not Found : (</h1>
    <Link to={'/'}>GO home</Link>
  </div>;
}

export default ErrorPage;
