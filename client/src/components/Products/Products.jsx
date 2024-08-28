import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Logo from "../../assets/images/logo.JPG";

const Products = () => {

  return (
    <div className="my-10">
      <Searchbar />

      <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-6 mt-10 p-4">
        <div class="bg-white shadow rounded overflow-hidden group">
          <div class="relative">
            <img src={Logo} alt="product 1" class="w-full" />
          </div>
          <div class="pt-4 pb-3 px-4">
            <a href="/product">
              <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Guyer Chair
              </h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
              <p class="text-xl text-primary font-semibold">$45.00</p>
              <p class="text-sm text-gray-400 line-through">$55.90</p>
            </div>
          </div>
          <a
            href="/product"
            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
