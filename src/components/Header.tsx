const Header = () => {
  return (
    <header className="w-full mb-10">
      <div className="navbar bg-base-100  border-b-2 border-green-300 justify-between">
        <a href="/Idol" className="btn btn-ghost text-xl rounded-xl text-green-300">
          daisyUI
        </a>
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered focus:outline-none w-md rounded-xl"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
