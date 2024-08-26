import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import ViewProduct from "../../components/Products/ViewProduct";

const ViewProductPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ViewProduct />
      <Contact />
    </>
  );
};

export default ViewProductPage;
