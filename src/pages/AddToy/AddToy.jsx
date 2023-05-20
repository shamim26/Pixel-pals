import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../context/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const AddToy = () => {
  const { user } = useContext(authContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://pixel-pals-server.vercel.app/post-toy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Toy added successfully.");
        }
      });
  };
  return (
    <div className="bg-primary h-screen border-t border-t-gray-500 text-white">
      <h1 className="text-4xl uppercase text-center font-custom font-bold mt-12">
        Add Toys
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto mt-10">
        <div className="grid grid-cols-2 justify-items-center gap-7 ">
          <input
            {...register("toyName")}
            className="bg-emerald-700 rounded-3xl text-white   input w-[500px] "
            placeholder="Toy Name"
            type="text"
            required
          />
          <input
            {...register("sellerName")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="Seller Name"
            type="text"
            required
            defaultValue={user?.displayName}
          />
          <input
            {...register("sellerEmail")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="Seller Email"
            type="email"
            required
            defaultValue={user?.email}
          />
          <input
            {...register("price")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="price"
            type="text"
            required
            defaultValue="$"
          />
          <input
            {...register("rating")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="Ratings"
            type="text"
            required
          />
          <input
            {...register("availableQuantity")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="Quantity"
            type="number"
            required
          />
          <input
            {...register("description")}
            className="bg-emerald-700 rounded-3xl text-white input w-[500px]"
            placeholder="Description"
            type="text"
            required
          />
          <select
            className="select bg-emerald-700 rounded-3xl w-[500px]"
            {...register("category")}
          >
            <option disabled selected>
              Sub-category
            </option>
            <option value="retro">Retro Gaming</option>
            <option value="indie">Indie Games</option>
            <option value="console">Console Exclusives</option>
          </select>
        </div>
        <div className="text-center">
          <input
            {...register("picture")}
            className="bg-emerald-700 rounded-3xl text-white input w-[90%] mt-6"
            placeholder="Toy Image URL"
            type="url"
            required
          />
        </div>
        <input
          className="bg-white text-black px-7 p-1 cursor-pointer 
          font-semibold duration-300 hover:bg-secondary 
          hover:shadow-xl rounded-3xl mx-auto block mt-6"
          type="submit"
          value="Add"
        />
      </form>
      <Toaster />
    </div>
  );
};

export default AddToy;
