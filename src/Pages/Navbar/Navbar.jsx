import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successfuly");
      })
      .catch(console.error());
  };
  const Navbars = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul className=" dropdown-content mt-3 z-[1] p-2  bg-base-100 ">
            {Navbars}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navbars}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={userIcon} />
            </div>
          </div>
        </div>
        <>
          {user ? (
            <button
              onClick={handelLogOut}
              className="w-[140px] h-[42px] bg-[#403F3F] text-white"
            >
              log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="w-[140px] h-[42px] bg-[#403F3F] text-white">
                Log in{" "}
              </button>
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default Navbar;
