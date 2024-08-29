import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import Logo from "../../assets/images/logo.JPG"

const ProductsDashboard = () => {
  return (
    <tr className="">
      <td className="py-4 px-4 min-w-[200px] border border-black">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Product"
            className="w-32 h-32 object-cover" /* Adjust the size for smaller screens */
          />
        </div>
      </td>

      <td className="font-semibold py-4 px-4 text-center min-w-[120px] border border-black">
        <p>Name</p>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">Description</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">$price</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px] border border-black">
        <span className="text-black font-semibold">offer</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[80px] border border-black">
        <div className="flex justify-center gap-5">
          <button className="text-primary hover:text-gray-800 text-2xl">
            <AiOutlineEdit />
          </button>
          <button className="text-primary hover:text-gray-800 text-2xl">
            <FaTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductsDashboard