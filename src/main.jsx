import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
const Posts = lazy(() => import('./pages/Posts/Posts'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const Home = lazy(() => import('./pages/Home/Home'))
import ErrorPage from './pages/404/404'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import './index.css'
import Post from './pages/Post/Post'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'posts/:id',
        element: <Post />,
      },
      { path: 'blog', element: <Blog /> },
      { path: '*', element: <ErrorPage /> },
    ]
  },
]);
function Loading() {
  return <h2>🌀 Loading...</h2>;
}



createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)
