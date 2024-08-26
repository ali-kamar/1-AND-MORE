import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Products from "../../components/Products/Products";

const ShopPage = () => {
    return (
      <>
        <Header />
        <Navbar />
        <Products />
        <Contact />
      </>
    );
};

export default ShopPage;
