import React from "react";
import { useForm } from "react-hook-form";

const UpdateModal = ({ show, onHide, selectedToy, handleUpdate }) => {
  const { _id, price, availableQuantity, description } = selectedToy;

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={show}
        onChange={onHide}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-xl text-center font-bold">Update Toy</h3>
          <form onSubmit={handleUpdate} className="mt-5 flex flex-col gap-5">
            <p className="py-0">Price</p>
            <input
              name="price"
              className=" rounded-3xl bg-gray-300 input w-full"
              defaultValue={price}
              type="text"
            //   defaultValue="$"
            />
            <input
              name="id"
              className=" rounded-3xl bg-gray-300 input w-full hidden"
              placeholder={_id}
              type="text"
              value={_id}
            />
            <p className="py-0">Quantity</p>
            <input
              name="availableQuantity"
              className="rounded-3xl bg-gray-300 input w-full"
              defaultValue={availableQuantity}
              type="number"
            />
            <p className="py-0">Description</p>
            <input
              name="description"
              className=" rounded-3xl bg-gray-300 input w-full"
              defaultValue={description}
              type="text"
            />
            <input
              className="bg-primary text-white px-7 p-1 cursor-pointer 
          font-semibold duration-300 hover:bg-secondary 
          hover:shadow-xl hover:text-black rounded-3xl mx-auto block mt-6"
              type="submit"
              value="Update"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdateModal;
