import { useEffect, useState } from "react";
import Toy from "./Toy";


const Categories = () => {
  const [active, setActive] = useState("retro");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://pixel-pals-server.vercel.app/toysByCategory/${active}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [active]);
  return (
    <div className="my-16 container mx-auto w-10/12 py-10">
      <h1 className="text-4xl text-center font-custom font-bold mb-10">
        Popular in Store
      </h1>
      <div>
        {/* categories */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-16 font-semibold text-xl">
          <button
            onClick={() => setActive("retro")}
            className={` transition-all ease-linear duration-200 ${
              active === "retro" ? "border-b-4 border-b-primary" : ""
            }`}
          >
            Retro Gaming
          </button>
          <button
            onClick={() => setActive("indie")}
            className={` transition-all ease-linear duration-200 ${
              active === "indie" ? "border-b-4 border-b-primary" : ""
            }`}
          >
            Indie Games
          </button>
          <button
            onClick={() => setActive("console")}
            className={` transition-all ease-linear duration-200 ${
              active === "console" ? "border-b-4 border-b-primary" : ""
            }`}
          >
            Console Exclusives
          </button>
        </div>
        {/* card */}
        <div
          className="container mx-auto bg-orange-50 rounded-xl
         grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 p-10"
        >
          {toys.map((toy) => (
            <Toy key={toy._id} toy={toy}></Toy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
