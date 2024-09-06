import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../api/axios"; // Adjust the path according to your project structure
import { useLoader } from "../Loader/LoaderProvider";
// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


  // Fetch products from the API
  const fetchProducts = async () => {
    try {

      const response = await axios.get("global/product");
      setProducts(response.data); // Set products
    } catch (err) {
      setError(err.response.data.msg);
    } finally {
  
    }
  };

  // Use effect to fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, error }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the notification context
export const useProduct = () => useContext(ProductContext);