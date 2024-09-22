import React, { useState, useEffect } from "react";
import { useOrder } from "../../contexts/Orders/OrdersProvider";
import axios from "../../api/axios";
import Notification from "../Notification/Notification";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import { useLoader } from "../../contexts/Loader/LoaderProvider";

const AdminOrders = () => {
  const { isOpen, notification, showNotification } = useNotification();
  const { fetchAdminOrders, adminOrders } = useOrder();
  const { showLoader, hideLoader } = useLoader();
  // State to track the currently selected status from the dropdown
  const [selectedStatus, setSelectedStatus] = useState("pending");

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus); // Update the selected status
    fetchAdminOrders(newStatus); // Fetch orders based on the selected status
  };

  const handleEditOrder = async (e, id) => {
    const newStatus = e.target.value;
    try {
      showLoader()
      const { data } = await axios.patch(`admin/orders/${id}`, {
        status: newStatus,
      });
      // After changing the status, re-fetch the orders based on the currently selected status
      fetchAdminOrders(selectedStatus);
    } catch (error) {
      console.error(error);
    }
    finally{hideLoader()}
  };

  const handleDelete = async (id) => {
    try {
      showLoader()
      const { data } = await axios.delete(`admin/orders/${id}`);
      // After changing the status, re-fetch the orders based on the currently selected status
      fetchAdminOrders(selectedStatus);
      showNotification("Order deleted successfully", "success")
    } catch (error) {
      console.error(error);
    }
    finally{hideLoader()}
  }
  useEffect(() => {
    fetchAdminOrders(selectedStatus)
  }, [])
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-10">Orders</h2>
      <div className="w-full flex justify-center">
        <div>
          <label htmlFor="list">Status: </label>
          <select
            name="list"
            value={selectedStatus}
            onChange={handleChange}
            className="border border-primary p-1 rounded"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 mt-10 p-4">
        {adminOrders.map((order) => (
          <div
            className="bg-white shadow rounded overflow-hidden p-4 border border-primary flex flex-col justify-between h-full"
            key={order.order_id}
          >
            <div>
              <h4 className="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
                Order ID:{" "}
                <span className="xs:text-xs md:text-sm">{order.order_id}</span>
              </h4>

              <h4 className="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
                Order Data
              </h4>

              <div className="mb-1">
                <p className="xs:text-sm md:text-xl text-primary font-semibold">
                  Name:{" "}
                  <span className="xs:text-sm md:text-base text-black">
                    {order.name}
                  </span>
                </p>
                <p className="xs:text-sm md:text-xl text-primary font-semibold">
                  Phone:{" "}
                  <span className="xs:text-sm md:text-base text-black">
                    {order.phone}
                  </span>
                </p>
                <p className="xs:text-sm md:text-xl text-primary font-semibold">
                  Address:{" "}
                  <span className="xs:text-sm md:text-base text-black">
                    {order.address}
                  </span>
                </p>
                <p className="xs:text-sm md:text-xl text-primary font-semibold">
                  Total:{" "}
                  <span className="xs:text-sm md:text-base text-black">
                    ${order.total}
                  </span>
                </p>
                <label
                  htmlFor="status"
                  className="xs:text-sm md:text-xl text-primary font-semibold"
                >
                  Status:{" "}
                </label>
                <select
                  name="status"
                  onChange={(e) => handleEditOrder(e, order.order_id)}
                  value={order.order_status}
                  className="border border-primary rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>

              <div>
                {order.data.map((details, index) => (
                  <p key={index}>
                    {details.quantity} {details.name} for ${details.total}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-2 w-full">
              <button
                className="border border-black bg-primary text-white rounded p-1 w-full"
                onClick={() => handleDelete(order.order_id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default AdminOrders;
