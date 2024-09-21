import React from "react";
import { useOrder } from "../../contexts/Orders/OrdersProvider";

const Orders = () => {
  const { fetchOrders, orders } = useOrder();
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-10">Orders</h2>
      <div className="w-full flex justify-center">
        <div>
          <label htmlFor="list">Status: </label>
          <select name="list" className="border border-primary p-1 rounded">
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-6 mt-10 p-4">
        {orders.map((order) => (
          <div class="bg-white shadow rounded overflow-hidden p-4 border border-primary">
            <h4 className="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
              Order ID:{" "}
              <span className="xs:text-xs md:text-sm">{order.order_id}</span>
            </h4>

            <h4 class="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
              Order Data
            </h4>

            <div class="mb-1">
              <p class="xs:text-sm md:text-xl text-primary font-semibold">
                Name:{" "}
                <span className="xs:text-xs md:text-base text-black">
                  {order.name}
                </span>
              </p>
              <p class="xs:text-sm md:text-xl text-primary font-semibold">
                Phone:{" "}
                <span className="xs:text-xs md:text-base text-black">
                  {order.phone}
                </span>
              </p>
              <p class="xs:text-sm md:text-xl text-primary font-semibold">
                Address:{" "}
                <span className="xs:text-xs md:text-base text-black">
                  {order.address}
                </span>
              </p>
              <p class="xs:text-sm md:text-xl text-primary font-semibold">
                Total:{" "}
                <span className="xs:text-xs md:text-base text-black">
                  ${order.total}
                </span>
              </p>
              <p class="xs:text-sm md:text-xl text-primary font-semibold">
                Status:{" "}
                <span className="xs:text-xs md:text-sm text-black">
                  {order.order_status}
                </span>
              </p>
            </div>

            <div>
              {order.data.map((details) => (
                <p>{details.quantity} {details.name} for ${details.total}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
