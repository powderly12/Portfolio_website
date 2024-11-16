import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">My Portfolio</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project1">Project 1</Link></li>
        <li><Link to="/project2">Project 2</Link></li>
        <li><Link to="/project3">Project 3</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
