import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import EditProducts from "./EditProduct";
import { useProduct } from "../../contexts/Product/ProductProvider";
import axios from "../../api/axios";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import Notification from "../Notification/Notification";

const ProductsDashboard = ({ product }) => {
  const { removeProduct } = useProduct();
  const [edit, setEdit] = useState(false);
  const { isOpen, notification, showNotification } = useNotification();
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`admin/product/${id}`);
      if (data) {
        removeProduct(id)
        showNotification("Product deleted successfully", "success")
      }
    } catch (error) {showNotification(error.response.data.msg, "error");}
  };

  return (
    <tr className="">
      <td className="py-4 px-4 min-w-[200px] border border-black">
        <div className="flex items-center gap-2">
          <img
            src={product.imageurl}
            alt="Product"
            className="w-32 h-32 object-cover" /* Adjust the size for smaller screens */
          />
        </div>
      </td>

      <td className="capitalize font-semibold py-4 px-4 text-center min-w-[120px] border border-black">
        <p>{product.name}</p>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">{product.description}</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">${product.price}</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">{product.offertype}</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[80px] border border-black">
        <div className="flex justify-center gap-5">
          <button
            className="text-primary hover:text-gray-800 text-2xl"
            onClick={() => setEdit(true)}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="text-primary hover:text-gray-800 text-2xl"
            onClick={() => handleDelete(product.product_id)}
          >
            <FaTrashAlt />
          </button>
        </div>
        {edit && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <EditProducts product={product} setEdit={setEdit} />
          </div>
        )}
      </td>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </tr>
  );
};

export default ProductsDashboard;
