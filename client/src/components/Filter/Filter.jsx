import React, { useState } from "react";
import { useFilter } from "../../contexts/Filter/FilterProvider";
import { useCategory } from "../../contexts/Categories/CategoriesProvider";

const Filter = () => {
  const { closeFilter } = useFilter();
  const { categories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("")
  console.log(selectedCategory);
  
   const handleCategoryClick = (categoryName) => {
     setSelectedCategory(categoryName);
   };
  return (
    <div className="max-w-xl w-full bg-black p-10 rounded text-white">
      <h4 className="font-semibold text-lg mb-5 border-b border-primary pb-5">
        Filters
      </h4>
      <div className="mb-5">
        <h4 className="mb-2 font-semibold text-lg">Categories:</h4>
        <ul className="flex p-4 list-none flex-wrap rounded gap-4 bg-primary text-black">
          {categories.map((category) => (
            <li
              className={`p-2 rounded cursor-pointer transition ${
                selectedCategory === category.category_name
                  ? "bg-black text-white"
                  : "bg-white hover:bg-black hover:text-white"
              }`}
              key={category.category_id}
              onClick={() => handleCategoryClick(category.category_name)}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
      {/* Sorting */}
      <div>
        <div className="mb-5">
          <label htmlFor="sort" className="block mb-1">
            Sort By Price:{" "}
          </label>
          <select
            name="sort"
            id="sort"
            className="text-black p-2 rounded w-full"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="asc">Price: Low To High</option>
            <option value="desc">Price: High To Low</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="min" className="block mb-1">
            Min Price $:
          </label>
          <input
            type="number"
            name="min"
            id="min"
            className="p-2 rounded text-black w-full"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="max" className="block mb-1">
            Max Price $:
          </label>
          <input
            type="number"
            name="max"
            id="max"
            className="p-2 rounded text-black w-full"
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="rounded bg-primary items-center border border-primary text-white py-1 xs:px-3 lg:px-8 hover:bg-transparent hover:text-primary transition">
          Save
        </button>
        <button
          className="ml-2 rounded bg-white items-center border border-black text-black py-1 xs:px-3 lg:px-8 hover:border-primary hover:bg-transparent hover:text-primary transition"
          onClick={closeFilter}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Filter;
