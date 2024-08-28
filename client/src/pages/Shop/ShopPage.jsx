import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Products from "../../components/Products/Products";
import Filter from "../../components/Filter/Filter";
import { useFilter } from "../../contexts/Filter/FilterProvider";

const ShopPage = () => {
  const {isFilterVisible} = useFilter()
    return (
      <>
        <Header />
        <Navbar />
        <Products />
        {isFilterVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <Filter />
          </div>
        )}
        <Contact />
      </>
    );
};

export default ShopPage;
