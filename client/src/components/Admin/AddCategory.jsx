import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
];

const AddCategory = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-10">Add Category</h2>
      <div className="flex justify-center mb-10">
        <div className="w-full lg:max-w-l relative flex md:max-w-md xs:max-w-xs">
          <input
            type="text"
            name="add"
            id="add"
            className="w-full border border-primary rounded-none p-3 focus:outline-none"
            placeholder="Add category..."
          />
          <button className="bg-primary items-center border border-primary text-white xs:px-4 lg:px-8 hover:bg-transparent hover:text-primary transition">
            Add
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={category.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <span className="text-lg font-medium">
                {index + 1}. {category.name}
              </span>
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCategory;
