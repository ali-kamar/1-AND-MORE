import React from "react";

const AddProducts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border border-primary bg-white p-8 rounded-md shadow-md w-full max-w-lg my-10 mx-2">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows="3"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price$:
          </label>
          <input
            id="price"
            type="number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter price"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            id="image"
            type="file"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">
            Categories:
          </label>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" /> Home
              equipment
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" /> Kitchen
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Accessories
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" /> Toys
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 cursor-pointer" defaultChecked/> Is
            Available?
          </label>
        </div>

        <div className="flex justify-between">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
            Add Product
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
