import React from "react";
import './Users.scss'


function Users({ data }) {
  return (
    <div className='Users'>
      {
        data.map(elem => {
          return (
            <article>
              <h3>{elem.username}</h3>
              <hr />
              <address>
                <p><span>email:</span> {elem.email}</p>
                <p><span>password:</span> {elem.password}</p>
              </address>
            </article>
          )
        })
      }
    </div>
  );
}

export default Users;
