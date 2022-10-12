import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 bg-base-100">
        <div className="container flex justify-between h-16 md:px-20 mx-auto">
          <Link
            to="/"
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
           <h5 className="text-xl font-bold">Snippets of Code</h5>
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link to='/collections'
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Collections
              </Link>
            </li>

            <li className="flex">
              <Link
                to="/statistics"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 "
              >
                Statistics
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/blog"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Blog
              </Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
