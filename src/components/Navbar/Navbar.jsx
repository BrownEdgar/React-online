import React from "react";
import './Navbar.scss'
import { NavLink } from 'react-router';

function Navbar() {
  return <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active_link" : ''}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({ isActive }) => isActive ? "active_link" : ''}>Posts</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "active_link" : ''}>Blog</NavLink>
        </li>
      </ul>
    </nav>
  </header>;
}

export default Navbar;