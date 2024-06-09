import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 mt-10">
      <div className="container mx-auto text-white noto-sans-sogdian-regular">
        <div className="flex justify-between">
          <div>
            <Link to="/about-us" className="text-xl font-bold mb-2 text-white" style={{ textDecoration: 'none' }}>
              About The Developers
            </Link>
            <p className="text-gray-400">
              Nostalgia News is your source for the latest in vintage news and historical articles.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-400">&copy; 2024 Nostalgia News. All rights reserved.</p>
            <img 
              src="https://developer.nytimes.com/files/poweredby_nytimes_200b.png?v=1583354208360" 
              alt="Powered by New York Times" 
              className="w-32 mt-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
