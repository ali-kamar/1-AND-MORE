import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../api/axios"; // Adjust the path according to your project structure
import { useLoader } from "../Loader/LoaderProvider";

// Create the context
export const CategoriesContext = createContext();

// Create the provider component
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const { showLoader, hideLoader } = useLoader()

  // Fetch products from the API
  const fetchCategories = async () => {
    try {
        showLoader()
      const response = await axios.get("admin/category");
      setCategories(response.data); // Set products
    } catch (err) {
      setError(err.response.data.msg);
    } finally {
        hideLoader()
    }
  };
  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const removeCategory = (id) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.category_id !== id)
    );
  };

  // Use effect to fetch products when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, error, removeCategory, addCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

// Custom hook to use the notification context
export const useCategory = () => useContext(CategoriesContext);
