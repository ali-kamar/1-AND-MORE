import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Widget } from "@uploadcare/react-widget";
import { useCategory } from "../../contexts/Categories/CategoriesProvider";
import axios from "../../api/axios";

const EditProducts = ({ product, setEdit }) => {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [imageURL, setimageURL] = useState(product?.imageurl || "");
  const [category, setCategory] = useState(product?.category || "");
  const [isAvailable, setIsAvailable] = useState(
    product?.isavailable !== undefined ? product.isavailable : true
  );
  const [offer, setOffer] = useState(product?.offer || "");
  const navigate = useNavigate();
  const { categories } = useCategory();

  const handleImageChange = (fileInfo) => {
    if (fileInfo) {
      setimageURL(fileInfo.cdnUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(imageURL);
      
      
      await axios.patch(`admin/product/edit-product/${product.product_id}`, {
        name,
        description,
        price,
        imageURL,
        category,
        isAvailable,
        offer,
      });
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg max-h-full overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter name"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Price Field */}
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter price"
            />
          </div>

          {/* Offer Field */}
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="offer"
            >
              Offer:
            </label>
            <input
              id="offer"
              type="number"
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter offer (optional)"
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Image:
            </label>
            <Widget
              publicKey="4df96b4a27d415d86bcc"
              onChange={handleImageChange}
              clearable
              tabs="file url"
              value={imageURL}
            />
          </div>

          {/* Categories Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">
              Categories:
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.category_id} value={cat.category_name}>
                  {cat.category_name}
                </option>
              ))}
            </select>
          </div>

          {/* Is Available Field */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
                className="mr-2 cursor-pointer"
              />
              Is Available?
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
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

export default EditProducts;
