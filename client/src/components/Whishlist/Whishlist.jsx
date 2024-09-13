import React from "react";
import Logo from "../../assets/images/logo.JPG";

const Whishlist = () => {
  return (
    <div className="space-y-4 sm:container pt-4 pb-16  xs:px-1">
      <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div className="xs:w-28 sm:w-28">
          <img src={Logo} alt="product 6" className="w-full" />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 xs:text-xs sm:text-xl font-medium uppercase">
            Italian L shape
          </h2>
          <p className="text-gray-500 xs:text-xs sm:text-sm">
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-primary xs:text-base sm:text-lg font-semibold">
          $320.00
        </div>
        <a
          href="#"
          className="xs:px-3 xs:py-1 sm:px-6 sm:py-2 text-center xs:text-xs sm:text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          add to cart
        </a>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>

     
    </div>
  );
};

export default Whishlist;
