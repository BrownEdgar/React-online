import React from "react";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: () => <Home title="home page" /> },
      { path: 'about', Component: About },
      { path: 'blog', Component: Blog },
    ]
  },

]);

function App() {
  return <div className='App'>
    <Navbar />
    <RouterProvider router={router} />
  </div>;
}

export default App;
