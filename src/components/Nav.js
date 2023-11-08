import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/littlelem.png';
import '../css/Nav.css'; // Import your CSS file for styling

function Nav() {
  return (
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
          <li><Link to="/order_online" className="nav-link">Order Online</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
        </ul>

      </nav>

  );
}

export default Nav;

