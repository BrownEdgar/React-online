import { ACTIONTYPES } from './reducer';

import './MainTable.scss'


function MainTable({ users, dispatch }) {

  return <div className='MainTable'>
    <table className='MainTable__table'>
      <thead>
        <tr>
          <th>id</th>
          <th>avatar</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>role</th>
          <th>phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt={user.firstName} />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
                <td className='del'>
                  <button
                    className='delete'
                    onClick={
                      () => dispatch({ type: ACTIONTYPES.DELETE_USER, payload: { id: user.id } })
                    }>
                    delete
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>;
}

export default MainTable;
