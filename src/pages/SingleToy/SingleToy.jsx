import { Rating, Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const data = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    rating,
    price,
    picture,
    description,
    availableQuantity,
  } = data;
  return (
    <div className="flex justify-center gap-20 w-10/12 mx-auto my-10 h-screen">
      <div className="mt-10">
        <img className="w-[500px] rounded-xl" src={picture} alt="" />
      </div>
      <div className="mt-10 p-10 space-y-6">
        <h3 className="text-2xl ">{toyName}</h3>
        <p className="text-xl text-primary font-medium">{price}</p>
        <p className="flex gap-2 items-center">
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
          <span className="align-middle">{rating}</span>
        </p>
        <p className="text-blue-400">Availability: {availableQuantity} left</p>
        <p>{description}</p>
        <button
          className="py-2 mt-2 px-5 text-black outline font-semibold bg-transparent 
                rounded-3xl hover:shadow-xl hover:bg-green-950 hover:text-white duration-300"
        >
          Add to cart
        </button>
        <button
          className="py-[9px] ml-5 px-5 text-white outline font-semibold bg-primary 
                rounded-3xl hover:shadow-xl hover:bg-secondary hover:text-black duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleToy;
