import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Orders from "../../components/Orders/Orders";
import OrdersFilter from "../../components/Orders/OrdersFilter";

const OrdersPage = () => {
  return (
    <>
      <AdminNavbar />
      <OrdersFilter />
      <Orders />
    </>
  );
};

export default OrdersPage;
