import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import { useLoader } from "../Loader/LoaderProvider";
// Create the context
export const OrdersContext = createContext();

// Create the provider component
export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [adminOrders, setAdminOrders] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  // Fetch products from the API
  const fetchOrders = async (id, status) => {
    try {
      showLoader();
      const response = await axios.get(`user/orders/${id}`, {
        params: { status },
      });
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      hideLoader();
    }
  };

  const fetchAdminOrders = async (status) => {
    try {
      showLoader();
      const response = await axios.get("admin/orders", {
        params: { status },
      });
      setOrders(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      hideLoader();
    }
  };

  
  return (
    <OrdersContext.Provider
      value={{
        fetchOrders,
        orders,
        fetchAdminOrders,
        adminOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

// Custom hook to use the notification context
export const useOrder = () => useContext(OrdersContext);
