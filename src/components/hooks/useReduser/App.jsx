
import { useEffect, useReducer } from 'react';
import reducer, { ACTIOINTYPES, initialValue } from './reducer.js';
import './App.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    dispatch({ type: ACTIOINTYPES.SETLOADING, payload: true })
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      const data = await response.json()
      dispatch({ type: ACTIOINTYPES.SAVE, payload: data })
    }
    fetchData()
  }, [])

  return <div className='App'>
    <h1>loading: {String(state.loading)}</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>

        {
          state.loading ? <tr>
            <td colSpan={4}><div className='loader'></div> </td>
          </tr> : (
            <>
              {
                state.data.map(post => {
                  return (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  )
                })
              }
            </>
          )

        }

      </tbody>
    </table>

  </div>;
}
export default App