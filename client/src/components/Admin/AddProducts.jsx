import React, { useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import { useCategory } from "../../contexts/Categories/CategoriesProvider";
import axios from "../../api/axios";
import Notification from "../Notification/Notification";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import { useLoader } from "../../contexts/Loader/LoaderProvider";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const { categories } = useCategory(); 
  const { isOpen, notification, showNotification } = useNotification()
  const { showLoader, hideLoader } = useLoader()

  // Handle image change from Uploadcare widget
  const handleImageChange = (fileInfo) => {
    if (fileInfo) {
      // Extract the URL from the fileInfo object
      setImageUrl(fileInfo.cdnUrl);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create product object to send to the backend
    const newProduct = {
      name,
      description,
      price,
      imageURL: imageUrl,
      category: selectedCategory,
      isAvailable,
    };

    try {
      showLoader()
      // Send POST request to backend
      const response = await axios.post(
        "/admin/product/add-product",
        newProduct
      );
     if(response.data) showNotification("Product Added Successfully!", "success");
      // Clear form fields after submission
      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setSelectedCategory("");
      setIsAvailable(true);

    } catch (error) {
      showNotification(error.response?.data.msg, "error");
    }
    finally{
      hideLoader()
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-primary bg-white p-8 rounded-md shadow-md w-full max-w-lg my-10 mx-2">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

        <form onSubmit={handleSubmit}>
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
              required
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="3"
              placeholder="Enter description"
              required
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter price"
              required
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
              {categories.length > 0 ? (
                categories.map((category) => (
                  <label
                    key={category.category_name}
                    className="flex items-center"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category.category_name}
                      checked={selectedCategory === category.category_name}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    {category.category_name}
                  </label>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
                className="mr-2 cursor-pointer"
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
              onClick={() => {
                setName("");
                setDescription("");
                setPrice("");
                setImageUrl("");
                setSelectedCategory("");
                setIsAvailable(true);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default AddProducts;
