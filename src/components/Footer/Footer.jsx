import React from "react";
import logo from "../../assets/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-20">
      <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 w-10/12 mx-auto mb-10">
        <div>
          <p className="md:mb-5">Call Us</p>
          <p className=" text-2xl">+880-1700-0000</p>
        </div>
        <div>
          <p className="md:mb-5">Email Us</p>
          <p className=" text-2xl">example@mail.com</p>
        </div>
        <div className="relative">
          <p className="mb-5">Subscribe To Our Newsletter</p>
          <input
            className="bg-transparent border-2 rounded-full py-5
             pl-4 outline-none w-full md:w-[390px]"
            type="text"
            placeholder="Your Email"
          />
          <button
            className="bg-white absolute text-primary
           font-medium py-[14px] px-6 rounded-full bottom-[8px]
            right-2 hover:bg-secondary duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="
          w-10/12 
          mx-auto 
          flex 
          flex-col-reverse 
          md:flex-row 
          gap-4 
          md:gap-0 
          justify-between 
          items-center 
          mb-10"
      >
        <img className="md:w-[200px] hidden md:block" src={logo} alt="" />
        <div className="flex gap-4">
          <FacebookRoundedIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <PinterestIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>
        <div className="flex gap-8 mr-3">
          <Link to="/">Home</Link>
          <Link>Shop</Link>
          <Link>New Arrival</Link>
          <Link to="/all-toys">Toys</Link>
        </div>
      </div>
      <div className="border-t border-t-gray-500 py-9">
        <p className="text-center">
          {" "}
          &copy; <small>2023 PixelPals</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
