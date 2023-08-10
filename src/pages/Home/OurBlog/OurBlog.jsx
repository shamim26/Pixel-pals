import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogImage1 from "../../../assets/Blog/blog1.jpg";
import BlogImage2 from "../../../assets/Blog/blog2.jpg";
import BlogImage3 from "../../../assets/Blog/blog3.jpg";
import BlogImage4 from "../../../assets/Blog/blog4.jpg";
import BlogImage5 from "../../../assets/Blog/blog5.jpg";

const OurBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="
        container
        w-10/12
        mx-auto
        "
    >
      <h1
        className="
            uppercase
            text-center
            text-4xl  
            font-custom
            font-bold 
            mb-16
            "
      >
        Our blog
      </h1>
      <Slider {...settings}>
        <div
          className="
        space-y-7
        group
        overflow-hidden
        mr-4
        "
        >
          <img
            className="
            overflow-hidden
            group-hover:scale-110
            duration-300
            w-[25.6rem] 
            h-[17rem] 
            object-cover 
            rounded-2xl"
            src={BlogImage1}
            alt=""
          />
          <p></p>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-green-700">
            How to get your toddlers busy for two hours
          </h2>
        </div>
        <div
          className="
        space-y-7
        group
        overflow-hidden
        mr-4
        "
        >
          <img
            className="
            overflow-hidden
            group-hover:scale-110
            duration-300
            w-[25.6rem] 
            h-[17rem] 
            object-cover 
            rounded-2xl"
            src={BlogImage2}
            alt=""
          />
          <p></p>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-green-700">
            How to get your toddlers busy for two hours
          </h2>
        </div>
        <div
          className="
        space-y-7
        group
        overflow-hidden
        mr-4
        "
        >
          <img
            className="
            overflow-hidden
            group-hover:scale-110
            duration-300
            w-[25.6rem] 
            h-[17rem] 
            object-cover 
            rounded-2xl"
            src={BlogImage3}
            alt=""
          />
          <p></p>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-green-700">
            Guide to working at summer camps
          </h2>
        </div>
        <div
          className="
        space-y-7
        group
        overflow-hidden
        mr-4
        "
        >
          <img
            className="
            overflow-hidden
            group-hover:scale-110
            duration-300
            w-[25.6rem] 
            h-[17rem] 
            object-cover 
            rounded-2xl"
            src={BlogImage4}
            alt=""
          />
          <p></p>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-green-700">
            What’s the main challenge for parents?
          </h2>
        </div>
        <div
          className="
        space-y-7
        group
        overflow-hidden
        mr-4
        "
        >
          <img
            className="
            overflow-hidden
            group-hover:scale-110
            duration-300
            w-[25.6rem] 
            h-[17rem] 
            object-cover 
            rounded-2xl"
            src={BlogImage5}
            alt=""
          />
          <p></p>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-green-700">
            How to choose the best preschool program
          </h2>
        </div>
      </Slider>
    </div>
  );
};

export default OurBlog;
