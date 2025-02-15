import React from "react";

const Header = () => {
  return (
    <header className="w-full mb-10">
      <div className="navbar bg-base-100  border-b-2 border-green-300 justify-between">
        <p className="btn btn-ghost text-xl rounded-xl text-green-300">daisyUI</p>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered focus:outline-none w-md rounded-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
