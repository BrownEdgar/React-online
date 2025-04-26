import React, { useState } from "react";
import './Posts.scss'
import useFetchData from '../../components/hooks/useFetchData';
import { Link } from 'react-router';
import Pagination from "../../components/Pagination/Paginagion";
import ReactPaginate from 'react-paginate';



export default function Posts() {
  const [data] = useFetchData({ url: 'https://jsonplaceholder.typicode.com/posts' })
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const slice = data?.slice((page * perPage) - perPage, (page * perPage))
  return (
    <div className='Posts'>
      <h1>Posts Page</h1>
      <div className="Posts__list">
        <ol>
          {slice?.map((post) => {
            return <li key={post.id}>
              <span>{post.id}.</span>
              <Link to={`${post.id}`}>{post.title}</Link>
            </li>
          })}
        </ol>
        {/* <Pagination perPage={perPage} total={data?.length} setPage={setPage} page={page} /> */}

        <ReactPaginate
          breakLabel="..."

          onPageChange={(x) => setPage(x.selected)}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(100 / perPage)}

          renderOnZeroPageCount={null}
          className='list'
          activeClassName="active"
        />
      </div>
    </div>
  );
}
