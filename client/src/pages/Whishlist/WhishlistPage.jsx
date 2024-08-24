import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Whishlist from '../../components/Whishlist/Whishlist';

const WhishlistPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Whishlist />
      <Contact />
    </>
  );
}

export default WhishlistPage