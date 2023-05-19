import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthProvider";
import UpdateModal from "../../components/UpdateModal/UpdateModal";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(authContext);
  const [showModal, setShowModal] = useState(false);
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5100/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user, toys]);

  //   update toys
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const id = form.id.value;
    const description = form.description.value;
    const order = {
      price,
      id,
      availableQuantity,
      description,
    };
    console.log(order);
    fetch(`http://localhost:5100/updateToys/${id}`, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated successfully.");
          form.reset();
        }
      });
  };

  //   delete toys
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5100/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire("Deleted!", "Your toy has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="my-10 w-10/12 mx-auto">
      <h1 className="text-4xl uppercase text-center font-custom font-bold mb-6">
        my Toys
      </h1>
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
              <th>Update</th>
              <th>Delete</th>
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
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setSelectedToy(toy);
                    }}
                    className="py-2 px-5 text-white font-semibold bg-primary 
                rounded-3xl hover:shadow-xl hover:bg-green-950 duration-300"
                  >
                    Update
                  </button>
                  <UpdateModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    selectedToy={selectedToy}
                    handleUpdate={handleUpdate}
                  ></UpdateModal>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="py-2 px-5 text-white font-semibold bg-primary 
                rounded-3xl hover:shadow-xl hover:bg-green-950 duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default MyToy;
