import React from "react";
import { useOrder } from "../../contexts/Orders/OrdersProvider";

const AdminOrders = () => {
  const { fetchAdminOrders, adminOrders, removeOrder } = useOrder();
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-10">Orders</h2>
      <div className="w-full flex justify-center">
        <div>
          <label htmlFor="list">Status: </label>
          <select
            name="list"
            id=""
            className="border border-primary p-1 rounded"
          >
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Delivered</option>
          </select>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 mt-10 p-400">
        {adminOrders.map((order) => (
          <div
            className="bg-white shadow rounded overflow-hidden p-4 border border-primary"
            key={order.order_id}
          >
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
              <label htmlFor="status">Status: </label>
              <select
                name="status"
                id=""
                className="border border-primary rounded"
              >
                <option value="">Pending</option>
                <option value="">Processing</option>
                <option value="">Delivered</option>
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
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
