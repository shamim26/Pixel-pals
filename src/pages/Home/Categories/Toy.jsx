import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Toy = ({ toy }) => {
  const { user } = useContext(authContext);
  const { picture, toyName, price, rating } = toy;

  const toastMsg = () => toast.error("Please login first!");

  return (
    <div className=" bg-white h-[450px] relative rounded-3xl">
      <div className="pt-8">
        <img
          className="w-[250px] h-[200px] mx-auto rounded-xl"
          src={picture}
          alt=""
        />
      </div>
      <div className=" card-body space-y-5 ">
        <h3 className="card-title">{toyName}</h3>
        <p className="flex justify-between font-medium">
          <span>{price}</span>
          <span>
            <FontAwesomeIcon className="text-yellow-300" icon={faStar} />{" "}
            {rating}
          </span>
        </p>
        <Link
          onClick={!user ? toastMsg : ""}
          to={`/toy/${toy._id}`}
          className="absolute bottom-3 left-4 w-[90%] py-2 px-4
         bg-primary text-white text-center rounded-3xl transition-all
          duration-300 hover:shadow-2xl"
        >
          Details
        </Link>
        <Toaster />
      </div>
    </div>
  );
};

export default Toy;
