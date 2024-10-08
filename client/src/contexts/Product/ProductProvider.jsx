import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../api/axios"; 
import { useLoader } from "../Loader/LoaderProvider";
// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      showLoader()
      const response = await axios.get("global/product");
      setProducts(response.data); // Set products
    } catch (err) {
      setError(err.response.data.msg);
    } finally {
      hideLoader()
    }
  };

   const fetchFilteredProducts = async ({
     category,
     minPrice,
     maxPrice,
     sort,
     search
   }) => {
     try {
       const response = await axios.get("/global/product", {
         params: { category, minPrice, maxPrice, sort, search },
       });
       
       setProducts(response.data);
     } catch (err) {
      console.log(err);
      
       setError(err.response?.data?.msg || "Error fetching products");
     }
   };

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== id)
    );
  };

    const updateProducts = (updatedProduct) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.product_id === updatedProduct.product_id
            ? updatedProduct
            : product
        )
      );
    };

  // Use effect to fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        error,
        updateProducts,
        removeProduct,
        fetchFilteredProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the notification context
export const useProduct = () => useContext(ProductContext);
