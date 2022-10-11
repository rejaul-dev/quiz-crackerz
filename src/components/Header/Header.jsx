import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex">
          <a href="/" className=" normal-case text-xl">
            Snippets of Code
          </a>
        </div>
        <div className="flex gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div>
          <Link to='/home'>Home</Link>
          <Link to='/snippets'>Snippets</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
