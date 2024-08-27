import React from "react";
import Logo from "../../assets/images/logo.JPG"

const ViewProduct = () => {
  return (
    <div class="container md:grid md:grid-cols-2 gap-6 my-10 xs:flex xs:flex-col">
      <div>
        <img src={Logo} alt="product" class="w-full" />
      </div>

      <div>
        <h2 class="text-3xl font-medium uppercase mb-2">
          Italian L Shape Sofa
        </h2>
        <div class="space-y-2">
          <p class="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            <span class="text-green-600">In Stock</span>
          </p>

          <p class="space-x-2">
            <span class="text-gray-800 font-semibold">Category: </span>
            <span class="text-gray-600">Sofa</span>
          </p>
        </div>
        <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p class="text-xl text-primary font-semibold">$45.00</p>
          <p class="text-base text-gray-400 line-through">$55.00</p>
        </div>

        <p class="mt-4 text-gray-600 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
          reprehenderit dolore vel mollitia optio consequatur hic asperiores
          inventore suscipit, velit consequuntur, voluptate doloremque iure
          necessitatibus adipisci magnam porro.
        </p>

        <div class="mt-4">
          <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
          <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div class="h-8 w-8 text-base flex items-center justify-center">
              4
            </div>
            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
        </div>

        <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
          <button class="bg-primary border border-primary text-white xs:p-2 xs:font-x sm:px-8 sm:py-2 xs:text-sm sm:text-17 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
            <i class="fa-solid fa-bag-shopping"></i> Add to cart
          </button>
          <button class="border border-gray-300 text-gray-600 xs:p-2 xs:font-x sm:px-8 sm:py-2 xs:text-sm sm:text-17 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
            <i class="fa-solid fa-heart"></i> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
