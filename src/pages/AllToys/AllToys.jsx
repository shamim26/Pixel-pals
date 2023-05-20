import { TableCell, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const data = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [toys, setToys] = useState(data);

  const handleSearch = () => {
    fetch(`https://pixel-pals-server.vercel.app/getToys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div className="my-10 w-10/12 mx-auto">
      <h1 className="text-4xl uppercase text-center font-custom font-bold">
        All Toys
      </h1>
      <div className="text-center my-8 rounded-xl relative">
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          className="w-[600px] "
          color="success"
          label="Search Toy"
        />
        <button
          onClick={handleSearch}
          className="py-3 px-5 absolute top-[4px] right-[27%] text-white font-semibold bg-primary rounded hover:shadow-xl hover:bg-green-950 duration-300"
        >
          Search
        </button>
      </div>

      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <Link
                    to={`/toy/${toy._id}`}
                    className="py-2 px-5 text-white font-semibold bg-primary 
                rounded-3xl hover:shadow-xl hover:bg-green-950 duration-300"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
