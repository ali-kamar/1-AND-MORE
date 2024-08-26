import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Logo from "../../../assets/images/logo.JPG"

const CartProduct = () => {
  

  return (
    <tr className="border-t border-gray-200 overflow-x-scroll">
      <td className="py-4 px-6">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-36 h-36 object-cover" />
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

      <td className="py-4 px-6 text-center">
        <button
          className="text-xl text-gray-600 hover:text-gray-800"
        >
          -
        </button>
        <span className="bg-primary text-white rounded-lg px-3 py-1 mx-2">
          6
        </span>
        <button
         
     
          className="text-xl text-gray-600 hover:text-gray-800"
        >
          +
        </button>
      </td>

      <td className="py-4 px-6 text-center">
        <span className="text-gray-700">$7</span>
      </td>

      <td className="py-4 px-6 text-center">
        <span className="text-gray-700">
          $7
        </span>
      </td>

      <td className="py-4 px-6 text-center">
        <button
          
          className="text-primary hover:text-gray-800"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
