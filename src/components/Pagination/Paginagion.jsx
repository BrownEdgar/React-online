import React from "react";
import './Paginagion.css'
function Paginagion({ perPage, total, setPage, page }) {

  const pageNumber = [];
  for (let i = 0; i < Math.ceil(total / perPage); i++) {
    pageNumber.push(i + 1)
  }
  return (
    <div className='Paginagion'>
      <ul>
        {
          pageNumber.map(n => {
            return (
              <li
                key={n}
                onClick={() => setPage(n)}
                className={`${page === n ? "active" : ""}`}
              >
                {n}
              </li>
            )
          }
          )
        }
      </ul>
    </div>
  );
}

export default Paginagion;
