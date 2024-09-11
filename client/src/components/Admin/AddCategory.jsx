import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCategory } from "../../contexts/Categories/CategoriesProvider";
import axios from "../../api/axios";
import Notification from "../Notification/Notification";
import { useNotification } from "../../contexts/Notification/NotificationProvider";

const AddCategory = () => {
  const { categories, removeCategory, addCategory } = useCategory();
  const { isOpen, notification, showNotification } = useNotification();
  const [newCategory, setNewCategory] = useState("")

  const handleAdd = async () => {
    try {
      const { data } = await axios.post("admin/category/add-category", {
        categoryName: newCategory,
      });
      if (data) {
        addCategory(data);
        setNewCategory("")
        showNotification("Category added successfully!", "success");
      }
    } catch (error) {
      showNotification(error.response.data.msg, "error");
    }
  };


  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`admin/category/${id}`);
      if (data) {
        removeCategory(id);
        showNotification("Category deleted successfully!", "success");
      }
    } catch (error) {
      showNotification(error.response.data.msg, "error");
    }
  };

  return (
    <div className="pt-3">
      <h2 className="text-4xl font-semibold text-center my-10">Add Category</h2>
      <div className="flex justify-center mb-10">
        <div className="w-full lg:max-w-l relative flex md:max-w-md xs:max-w-xs">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            name="add"
            id="add"
            className="w-full border border-primary rounded-none p-3 focus:outline-none"
            placeholder="Add category..."
          />
          <button
            className="bg-primary items-center border border-primary text-white xs:px-4 lg:px-8 hover:bg-transparent hover:text-primary transition"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={category.category_id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <span className="text-lg font-medium">
                {index + 1}. {category.category_name}
              </span>
              <div className="">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(category.category_id)}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default AddCategory;
