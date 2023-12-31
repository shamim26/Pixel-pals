import img1 from "../../../assets/gallery/gallery(1).jpg";
import img3 from "../../../assets/gallery/gallery(3).jpg";
import img4 from "../../../assets/gallery/gallery(4).jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl  font-custom font-bold mb-16">
        Recent Photoshots
      </h1>
      <p></p>
      <div className="flex md:flex-row flex-col items-center  gap-5">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[300px] h-[300px] rounded-xl object-cover"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          className="w-[300px] h-[387px] rounded-xl object-cover"
          src="https://i.ebayimg.com/images/g/M90AAOSwoaRijIb2/s-l600.jpg"
          alt=""
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[300px] h-[300px] rounded-xl object-cover"
          src={img3}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          className="w-[300px] rounded-xl object-cover"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
