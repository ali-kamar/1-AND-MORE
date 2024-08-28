import React, { createContext, useState, useContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(true);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <FilterContext.Provider
      value={{ isFilterVisible, toggleFilter, closeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the cart context
export const useFilter = () => {
  return useContext(FilterContext);
};