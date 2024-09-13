import React, {useState} from "react";
import { useFilter } from "../../contexts/Filter/FilterProvider";
import { useProduct } from "../../contexts/Product/ProductProvider";

const Searchbar = () => {
  const { toggleFilter } = useFilter();
  const { fetchProducts, fetchFilteredProducts } = useProduct();
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  const handleSearch = () => {    
    fetchFilteredProducts({ search: searchTerm });
  };

  const handleReset = () => {
    setSearchTerm("");
    fetchProducts();
  };
  return (
    <div className="flex justify-center my-10">
      <div className="w-full lg:max-w-xl relative flex md:max-w-md xs:max-w-sm">
        <span
          className="mt-3 mr-3 cursor-pointer "
          title="Reset All Filters"
          onClick={handleReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
            />
          </svg>
        </span>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-primary rounded-none p-3 focus:outline-none "
          placeholder="Search products..."
        />
        <button
          className="bg-primary items-center border border-primary text-white xs:px-3 lg:px-8  hover:bg-transparent hover:text-primary transition "
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="ml-2 bg-primary items-center border border-primary text-white xs:px-3 lg:px-8  hover:bg-transparent hover:text-primary transition "
          onClick={toggleFilter}
        >
          Filters
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
