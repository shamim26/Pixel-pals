import React, { useEffect, useState } from "react";
import Toy from "./Toy";

const Categories = () => {
  const [active, setActive] = useState("retro");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5100/toysByCategory/${active}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [active]);
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center font-custom font-bold mb-10">
        Category
      </h1>
      <div>
        {/* categories */}
        <div className="flex justify-center gap-16 font-semibold text-xl">
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
          className="container mx-auto w-11/12 bg-orange-50 rounded-xl
         grid grid-cols-3 gap-8 mt-10 p-10"
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
