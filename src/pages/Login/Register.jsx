import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import useTitle from "../../hook/useTitle";

const Register = () => {
  useTitle('Register')
  const { registerUser, addUserInfo } = useContext(authContext);
  const [check, setCheck] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const imageUrl = form.photo.value;

    registerUser(email, password)
      .then((result) => {
        const newUser = result.user;
        addUserInfo(name, imageUrl);
        console.log(newUser);
        setCheck("");
      })
      .catch((err) => setCheck(err.message));
  };

  return (
    <div>
      <div
        className="bg-primary text-white border-t border-b border-b-white
     border-gray-500
     h-screen pt-20"
      >
        <h2 className="text-center text-4xl font-custom font-bold leading-[50px]">
          Get more things done <br /> with PixelPals.
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
        <form
          onSubmit={handleRegister}
          className=" flex flex-col gap-5 items-center mt-7"
        >
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <input
            type="text"
            required
            name="photo"
            placeholder="Profile Photo Url"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
          />
          <small className="text-red-500">{check}</small>
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
