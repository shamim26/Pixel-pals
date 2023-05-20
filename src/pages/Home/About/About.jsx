import {
  faCircleCheck,
  faHandshake,
  faStarOfDavid,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center">
        <h1 className="text-4xl font-bold font-custom leading-[55px]">
          Why We Are Best <br /> In The Market{" "}
        </h1>
        <p className="font-medium text-gray-500">
          we're proud to be the best choice for video game toys. <br />
          With an unbeatable selection, top-notch quality, <br /> and
          exceptional customer service.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-5">
        <div className="border space-y-4 p-4">
          <div className="bg-primary rounded-full h-[60px] w-[60px] p-[12px] ">
            <FontAwesomeIcon
              className="text-4xl text-white font-light"
              icon={faStarOfDavid}
            />
          </div>

          <h3 className="text-lg font-bold">Unmatched Selection</h3>
          <p className="text-sm text-gray-500 font-medium">
            {" "}
            We offer an extensive collection of video game toys from popular
            franchises, including Mario Universe, Pokémon World, and Legend of
            Zelda. Whether you're a fan of plushies, action figures.
          </p>
        </div>
        <div className="border space-y-4 p-4">
          <div className="bg-primary rounded-full h-[60px] w-[60px] p-[12px] ">
            <FontAwesomeIcon
              className="text-4xl text-white font-light"
              icon={faCircleCheck}
            />
          </div>

          <h3 className="text-lg font-bold">Quality and Authenticity</h3>
          <p className="text-sm text-gray-500 font-medium">
            {" "}
            We understand the importance of quality and authenticity when it
            comes to video game toys. That's why we source our products from
            trusted manufacturers and sellers, ensuring that every item meets
            our high standards
          </p>
        </div>
        <div className="border space-y-4 p-4">
          <div className="bg-primary rounded-full h-[60px] w-[60px] p-[10px] ">
            <FontAwesomeIcon
              className="text-4xl text-white font-light"
              icon={faHandshake}
            />
          </div>

          <h3 className="text-lg font-bold">Exclusive Deals and Offers</h3>
          <p className="text-sm text-gray-500 font-medium">
            {" "}
            We believe in providing our customers with the best value for their
            money. Keep an eye out for our exclusive deals, discounts, and
            limited-time offers, allowing you to expand your collection without
            breaking the bank.
          </p>
        </div>
        <div className="border space-y-4 p-4">
          <div className="bg-primary rounded-full h-[64px] w-[64px] p-[10px] pt-4 ">
            <FontAwesomeIcon
              className="text-4xl text-white font-light"
              icon={faUsers}
            />
          </div>

          <h3 className="text-lg font-bold">User-Friendly Experience</h3>
          <p className="text-sm text-gray-500 font-medium">
            {" "}
            Our website is designed with you in mind. We've created an intuitive
            and user-friendly interface, making it easy to browse through
            different categories, find the toys you love, and make a purchase
            effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
