import React from "react";

import './Users.scss'

import EyeOutlined from '../Icons/EyeOutlined';
import EyeOffLine from '../Icons/EyeOffLine';
import UserDrop from '../Icons/UserDropIcon'


function Users({ data, setValue, index }) {

  const handleDelete = (id) => {
    fetch(import.meta.env.VITE_DB_URL + `/${id}`, {
      method: "DELETE"
    }).then(() => {
      window.location.reload()
    })
  }
  return (
    <div className='Users'>
      {
        data.map(elem => {
          return (
            <article key={elem.id}>
              <span className='drop' onClick={() => handleDelete(elem.id)}>
                <UserDrop />
              </span>
              <h3>
                {elem.username}
              </h3>
              <hr />
              <address>
                <p><span>email:</span> {elem.email}</p>
                <p className='row'>
                  <span>password:</span>
                  {index === elem.id ? elem.password : "***".repeat(4)}
                  <button onClick={() => setValue((prevValue) => {
                    return elem.id === prevValue ? null : elem.id
                  })}>
                    {
                      index === elem.id ? <EyeOffLine /> : <EyeOutlined />
                    }
                  </button>
                </p>
              </address>
            </article>
          )
        })
      }
    </div>
  );
}

export default Users;
