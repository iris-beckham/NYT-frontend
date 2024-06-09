import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold dm-serif-text-regular">New York Times</Link>
        <div className="flex space-x-4">
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
