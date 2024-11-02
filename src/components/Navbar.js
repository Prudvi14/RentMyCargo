import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" className="logo" />
        <span className="logo-text">Rent My Cargo</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/cargo">Cargo</Link>
        <Link to="/about">About</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;