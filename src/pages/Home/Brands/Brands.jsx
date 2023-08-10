import brand1 from "../../../assets/Brands/brands1.png";
import brand2 from "../../../assets/Brands/brands2.png";
import brand3 from "../../../assets/Brands/brands3.png";
import brand4 from "../../../assets/Brands/brands4.png";

const Brands = () => {
  return (
    <div 
    className="
        container
        w-9/12
        mx-auto
        grid
        grid-cols-2
        gap-6
        md:gap-0
        md:grid-cols-5
        items-center
    ">
      <img className="w-[6rem] hover:opacity-60 duration-300" src={brand1} alt="" />
      <img className="w-[6rem] hover:opacity-60 duration-300" src={brand2} alt="" />
      <img className="w-[6rem] hover:opacity-60 duration-300" src={brand3} alt="" />
      <img className="w-[6rem] hover:opacity-60 duration-300" src={brand4} alt="" />
      <h1 className="text-2xl font-bold font-custom">We work with the best brands</h1>
    </div>
  );
};

export default Brands;
