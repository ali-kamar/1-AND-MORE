import React, {useEffect} from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Whishlist from '../../components/Whishlist/Whishlist';
import { useNavigate } from "react-router-dom";

const WhishlistPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });
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