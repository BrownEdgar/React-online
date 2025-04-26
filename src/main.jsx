import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router";
import Home from './pages/Home/Home.jsx';
import Posts from './pages/Posts/Posts.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Post from "./pages/Post/Post.jsx";
import SignIn from './pages/SignIn/SignIn.jsx';


const isLoggedIn = () => {
  return !!localStorage.getItem("login");
};

const protectedLoader = () => {
  if (!isLoggedIn()) {
    return redirect("/signin");
  }
  return null; // Proceed if authenticated
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts', element: <Posts />, },
      { path: 'posts/:id', element: <Post />, },
      { path: 'blog', element: <Blog /> },
      { path: 'signin', element: <SignIn /> },
      { path: '*', element: <Navigate to={'/'} /> },

    ]
  },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
