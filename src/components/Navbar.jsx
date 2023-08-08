import React from 'react';
import logo from "../media/moto.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo}  />
      </div>
    </nav>
  );
}

export default Navbar;
