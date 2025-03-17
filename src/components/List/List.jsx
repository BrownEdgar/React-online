import Person from '../Person';
import './List.css'

function List(props) {
  return (
    <div className='List'>
      <Person name="Karo" />
      <h1 className='List__title'>Simple <span>React list</span> {props.data.length}</h1>
      <ul>
        {
          props.data.map(elem => <li key={elem}>{elem}</li>)
        }
      </ul>
      <button onClick={props.deleteCity}>delete city</button>
    </div>
  )
}


export default List;
