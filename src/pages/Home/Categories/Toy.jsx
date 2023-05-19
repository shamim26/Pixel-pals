import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Toy = ({ toy }) => {
  const { picture, toyName, price, rating } = toy;
  return (
    <div className=" bg-white  rounded-3xl">
      <div className="pt-8">
        <img
          className="w-[250px] h-[200px] mx-auto rounded-xl"
          src={picture}
          alt=""
        />
      </div>
      <div className=" card-body space-y-5 relative">
        <h3 className="card-title">{toyName}</h3>
        <p className="flex justify-between font-medium">
          <span>{price}</span>
          <span>
            <FontAwesomeIcon className="text-yellow-300" icon={faStar} />{" "}
            {rating}
          </span>
        </p>
        <button className=" w-full py-2 px-4 bg-primary text-white rounded-3xl">
          Details
        </button>
      </div>
    </div>
  );
};

export default Toy;
