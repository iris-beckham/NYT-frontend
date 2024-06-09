import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full"> 
      <div>
        <Link to="/" style={{ fontSize: '2rem' }} className="text-white text-4xl font-bold dm-serif-text-regular ml-4 mt-4">Nostalgia News</Link>
      </div>
    </nav>
  );
};

export default NavBar;
