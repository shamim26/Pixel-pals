import banner from "../../../assets/banner.png";
import Gallery from "../Gallery/Gallery";
import Categories from "../Categories/Categories";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
import Extra from "../Extra/Extra";
import useTitle from "../../../hook/useTitle";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";
import Best from "../Best/Best";
import Testimonial from "../Testimonial/Testimonial";
import OurBlog from "../OurBlog/OurBlog";
import Brands from "../Brands/Brands";
AOS.init();

const Home = () => {
  useTitle("Home");
  return (
    <div className="overflow-hidden">
      {/* hero */}
      <div
        className="
        flex
        items-center 
        justify-center 
        gap-14 
      bg-primary 
        border-t 
      border-gray-500
        h-screen px-16"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-white text-center md:text-left space-y-5"
        >
          <h1 className="text-4xl md:text-5xl font-custom font-bold leading-[130%]">
            Embark on an Epic
            <br /> Adventure through <br /> the PixelPals
            <br /> Universe!
          </h1>
          <p className="text-slate-300">
            Discover a pixelated realm of gaming treasures at
            <br /> PixelPals. Unleash your nostalgia and collect iconic video
            game toys.
          </p>
          <button className="py-3 px-5 text-black font-semibold bg-white rounded-3xl hover:shadow-xl hover:bg-secondary duration-300">
            Shop now
          </button>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <img className="w-[700px] hidden md:block" src={banner} alt="" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#064635"
          fillOpacity="1"
          d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      {/* About */}
      <div className="container my-24 mx-auto w-10/12">
        <About />
      </div>
      {/* gallery */}
      <div className="container my-32 mx-auto w-10/12">
        <Gallery />
      </div>
      {/* categories */}
      <div className="bg-orange-50">
        <Categories />
      </div>
      <div className="my-20">
        <Best />
      </div>
      {/* extra */}
      <div>
        <Extra />
      </div>
      <div>
        <Testimonial />
      </div>
      <div
        className="
        bg-orange-50
        py-28"
      >
        <OurBlog />
      </div>
      <div className="my-12">
        <Brands />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
