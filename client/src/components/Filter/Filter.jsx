import React, { useState } from "react";
import { useFilter } from "../../contexts/Filter/FilterProvider";
import { useCategory } from "../../contexts/Categories/CategoriesProvider";
import { useProduct } from "../../contexts/Product/ProductProvider";

const Filter = () => {
  const { closeFilter } = useFilter();
  const { categories } = useCategory();
  const {fetchFilteredProducts} = useProduct()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  
  const handleSave = () => {
  fetchFilteredProducts({
    category: selectedCategory,
    minPrice,
    maxPrice,
    sort,
  });
closeFilter()
  }
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
            Sort By Price:
          </label>
          <select
            name="sort"
            id="sort"
            className="text-black p-2 rounded w-full"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Select</option>
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
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
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
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 rounded text-black w-full"
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="rounded bg-primary items-center border border-primary text-white py-1 xs:px-3 lg:px-8 hover:bg-transparent hover:text-primary transition"
        onClick={handleSave}
        >
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
