import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminOrders from "../../components/Admin/AdminOrders";
import OrdersFilter from "../../components/Orders/OrdersFilter";

const OrdersPage = () => {
  return (
    <>
      <AdminNavbar />
      <OrdersFilter />
      <AdminOrders />
    </>
  );
};

export default OrdersPage;
