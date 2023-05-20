import React from "react";
import img from "../../assets/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <img className="w-[700px] h-[600px]" src={img} alt="" />
      <Link to="/" className="bg-primary py-2 px-5  text-white rounded-3xl">Back</Link>
    </div>
  );
};

export default ErrorPage;
