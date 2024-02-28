import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
      <div className="Header">
        <div>
          <Link to="/" className="logo-link">
            <img src="/logo.png" className="App-logo" alt="TasteTrails Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <NavLink className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' } to="/about" > About </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' } to="/diary" > Diary </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' } to="/restaurant-finder" > Finder </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' } to="/random" > Random Eat </NavLink>
      </div>
    </div>
  );
}

export default Header;
