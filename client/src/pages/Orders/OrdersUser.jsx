import React, {useEffect} from 'react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Orders from '../../components/Orders/Orders';
import Contact from '../../components/Contact/Contact';
import { useNavigate } from "react-router-dom";

const OrdersUser = () => {
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
      <Orders />
      <Contact />
    </>
  );
}

export default OrdersUser