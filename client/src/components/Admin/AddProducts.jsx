import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";

const AddProducts = () => {
  const [imageUrl, setImageUrl] = useState("");

  // Handle image change from Uploadcare widget
  const handleImageChange = (fileInfo) => {
    if (fileInfo) {
      // Extract the URL from the fileInfo object
      setImageUrl(fileInfo.cdnUrl);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-primary bg-white p-8 rounded-md shadow-md w-full max-w-lg my-10 mx-2">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

        <form>
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
            <label className="block text-black text-sm font-bold mb-2">
              Image:
            </label>
            {/* Uploadcare Widget for image upload */}
            <Widget
              publicKey="4df96b4a27d415d86bcc" // Replace with your Uploadcare public key
              onChange={handleImageChange}
              clearable
              tabs="file url"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Categories:
            </label>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category" // All radio buttons should have the same name
                  value="Home equipment"
                  className="mr-2 cursor-pointer"
                />
                Home equipment
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Kitchen"
                  className="mr-2 cursor-pointer"
                />
                Kitchen
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Accessories"
                  className="mr-2 cursor-pointer"
                />
                Accessories
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Toys"
                  className="mr-2 cursor-pointer"
                />
                Toys
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                defaultChecked
              />{" "}
              Is Available?
            </label>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Add Product
            </button>
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
