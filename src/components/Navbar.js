import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="bookstore">Bookstore CMS</h1>
    <div className="links">
      <NavLink className="link" activeStyle={{ opacity: 0.5 }} to="/">Books</NavLink>
      <NavLink className="link" to="/categories">Categories</NavLink>
    </div>
    <div className="user">
      <svg className="user-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" /></svg>
    </div>
  </nav>
);

export default Navbar;
