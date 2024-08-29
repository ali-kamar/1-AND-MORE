import React from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import Orders from "../../components/Orders/Orders";
import OrdersFilter from "../../components/Orders/OrdersFilter";

const OrdersPage = () => {
  return (
    <div className="bg-gray-100">
      <AdminNavbar />
      <OrdersFilter />
      <Orders />
    </div>
  );
};

export default OrdersPage;
