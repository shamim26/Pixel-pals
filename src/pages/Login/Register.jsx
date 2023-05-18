import React from "react";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        className="bg-primary text-white border-t
     border-gray-500
     h-screen pt-20"
      >
        <h2 className="text-center text-4xl font-custom font-bold leading-[50px]">
          Get more things done <br /> with this platform.
        </h2>
        <div className="text-center mt-8 space-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b transition-all duration-200" : ""
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "border-b" : "")}
            to="/register"
          >
            Register
          </NavLink>
        </div>
        <form className=" flex flex-col gap-5 items-center mt-7">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <button
            className="py-1 px-5 bg-white rounded-3xl
           text-black font-semibold hover:shadow-xl
           hover:bg-secondary duration-300"
            type="submit"
          >
            Register
          </button>
          <div>
            <small>
              Or register with{" "}
              <Link className="underline font-medium">Google</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
