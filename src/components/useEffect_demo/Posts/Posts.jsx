import ListItem from '../ListItem/ListItem';
import './Posts.css'

function Posts({ data, handleDelete }) {
  return <div className='Posts'>
    <h1>Our POSTS</h1>
    <ul>
      {
        data.map(elem => {
          return <ListItem key={elem.id} elem={elem} handleDelete={handleDelete} />
        })
      }
    </ul>

  </div>;
}

export default Posts;
