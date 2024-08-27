import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Logo from "../../../assets/images/logo.JPG";

const CartProduct = () => {
  return (
    <tr className="border-t border-gray-200">
      <td className="py-4 px-4 min-w-[200px]">

        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Product"
            className="w-32 h-32 object-cover" /* Adjust the size for smaller screens */
          />
          <div className="flex flex-col text-left">
            <h4 className="text-lg font-semibold">Sakhan</h4>
            <Link
              to={`/shops/products/`}
              className="text-blue-500 hover:underline"
            >
              view product
            </Link>
          </div>
        </div>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px]">
        <button className="text-xl text-gray-600 hover:text-gray-800">-</button>
        <span className="bg-primary text-white rounded-lg px-4 py-2 mx-2">
          6
        </span>
        <button className="text-xl text-gray-600 hover:text-gray-800">+</button>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px]">
        <span className="text-black font-semibold">$7</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[120px]">
        <span className="text-black font-semibold">$7</span>
      </td>

      <td className="py-4 px-4 text-center min-w-[80px]">
        <button className="text-primary hover:text-gray-800 text-2xl">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
