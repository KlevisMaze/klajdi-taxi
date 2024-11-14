import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Klajdi Taxi</h1>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-8 font-semibold absolute md:static top-full left-0 w-full bg-blue-700 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-b md:border-none">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-white hover:bg-blue-600 md:hover:bg-transparent"
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-white hover:bg-blue-600 md:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/offers"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-white hover:bg-blue-600 md:hover:bg-transparent"
            >
              Offers
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-white hover:bg-blue-600 md:hover:bg-transparent"
            >
              Book a Taxi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
