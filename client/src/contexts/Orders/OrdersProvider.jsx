import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../../api/axios";
import { useLoader } from "../Loader/LoaderProvider";
import Notification from "../../components/Notification/Notification";
import { useNotification } from "../Notification/NotificationProvider";
// Create the context
export const OrdersContext = createContext();

// Create the provider component
export const OrdersProvider = ({ children }) => {
  const { isOpen, notification, showNotification } = useNotification();
  const [orders, setOrders] = useState([]);
  const [adminOrders, setAdminOrders] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  // Fetch products from the API
  const fetchOrders = async (status) => {
    try {
      showLoader();
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(`user/orders/${user.user_id}`, {
        params: { status },
      });
      setOrders(response.data);
    } catch (error) {
      showNotification(error.response.data.msg, "error");
      setOrders([]);
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
      setAdminOrders(response.data);
    } catch (err) {
      showNotification(err.response.data.msg, "error");
      setAdminOrders([]);
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
        setAdminOrders,
      }}
    >
      <div>
        {isOpen && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}
      </div>
      {children}
    </OrdersContext.Provider>
  );
};

// Custom hook to use the notification context
export const useOrder = () => useContext(OrdersContext);
