import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import {
  faArrowRightToBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex relative items-center justify-between px-6 md:px-16 bg-primary">
      <div>
        <img className="w-52" src={logo} alt="" />
        {/* <h1 className="text-4xl  font-medium text-white">Pixel<span className="font-bold">Pals</span></h1> */}
      </div>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open ? (
            <FontAwesomeIcon className="text-4xl" icon={faXmark} />
          ) : (
            <FontAwesomeIcon className="text-3xl" icon={faBars} />
          )}
        </span>
      </div>
      <div
        className={`flex items-center flex-col md:flex-row
       bg-white md:bg-transparent gap-6 pb-5 md:pb-0 md:gap-14
        md:static absolute text-black md:text-white transition-all duration-500 ease-in md:z-auto z-1 md:w-auto w-full left-0 ${
          open ? "top-20 " : "top-[-490px]"
        } `}
      >
        <Link to="/">Home</Link>
        <Link to="/all-toys">All Toys</Link>
        <Link to="/my-toys">My Toys</Link>
        <Link to="/add-toy"> Add A Toy</Link>
        <Link to="/blogs">Blogs</Link>

        {user ? (
          <div className=" flex gap-3">
            <img
              className="w-[50px] h-[50px] md:ml-60 rounded-[30px]"
              title={user?.displayName}
              src={user?.photoURL}
              alt=""
            />
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <Link
            to="/login"
            className="py-3 px-5 text-black font-semibold md:ml-60 bg-white rounded-3xl hover:shadow-xl hover:bg-secondary duration-300"
          >
            <FontAwesomeIcon className="mr-2" icon={faArrowRightToBracket} />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
