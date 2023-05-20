import React from "react";
import bg from "../../../assets/minecraft.jpg";
import steve from "../../../assets/steve.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Extra = () => {
  return (
    <div
      className="bg-cover bg-primary bg-blend-multiply bg-no-repeat h-[500px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-white flex justify-around items-center pt-8">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl font-custom font-bold mb-5">
            Experience Unparalleled <br /> Service at PixelPals
          </h1>
          <p className="text-xl text-gray-300 mb-5">
            {" "}
            prioritize your satisfaction with top-quality <br /> products and a
            seamless shopping experience.
          </p>
          <button className="bg-white text-primary py-3 px-14 rounded-full text-xl font-semibold  hover:bg-secondary duration-300">
            Shop Now
          </button>
        </div>
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          className="h-[450px]"
          src={steve}
          alt=""
        />
      </div>
    </div>
  );
};

export default Extra;
