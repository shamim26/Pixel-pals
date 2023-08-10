import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import useTitle from "../../hook/useTitle";
import { Toaster, toast } from "react-hot-toast";
import loginBg from '../../assets/game-bg.jpg'

const Login = () => {
  useTitle("Login");
  const { loginUser, googleSignIn } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        toast.success("Login successful.");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const errMsg = err.message;
        setError(errMsg);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((user) => {
        setError("");
        toast.success("Login successful.");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div
      style={{backgroundImage:`url(${loginBg})`}}
      className="
      bg-blend-multiply
      bg-cover
      bg-no-repeat
    bg-primary
    text-white 
      border-t 
      border-b 
    border-b-white
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
        onSubmit={handleLogin}
        className=" flex flex-col gap-5 items-center mt-7"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="input bg-emerald-700 rounded-3xl text-white w-full max-w-xs"
        />
        <small className="text-red-500">{error}</small>
        <button
          className="py-1 px-5 bg-white rounded-3xl
           text-black font-semibold hover:shadow-xl
           hover:bg-secondary duration-300"
          type="submit"
        >
          Login
        </button>
        <div>
          <small>
            Or login with{" "}
            <Link
              onClick={handleGoogleSignIn}
              className="underline font-medium"
            >
              Google
            </Link>
          </small>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
