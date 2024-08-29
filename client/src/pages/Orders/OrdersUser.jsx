import React from 'react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import OrdersFilter from '../../components/Orders/OrdersFilter';
import Orders from '../../components/Orders/Orders';
import Contact from '../../components/Contact/Contact';

const OrdersUser = () => {
  return (
    <>
      <Header />
      <Navbar />
      <OrdersFilter />
      <Orders />
      <Contact />
    </>
  );
}

export default OrdersUser