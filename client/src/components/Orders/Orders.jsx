import React from "react";

const Orders = () => {
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

      <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-6 mt-10 p-4">
        <div class="bg-white shadow rounded overflow-hidden p-4">
          <h4 className="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
            Order ID: <span className="xs:text-xs md:text-sm"></span>
          </h4>

          <h4 class="uppercase font-medium xs:text-base md:text-xl mb-2 text-gray-800 ">
            Order Data
          </h4>

          <div class="mb-1">
            <p class="xs:text-sm md:text-xl text-primary font-semibold">
              Name: <span className="xs:text-xs md:text-sm"></span>
            </p>
            <p class="xs:text-sm md:text-xl text-primary font-semibold">
              Phone: <span className="xs:text-xs md:text-sm"></span>
            </p>
            <p class="xs:text-sm md:text-xl text-primary font-semibold">
              Address: <span className="xs:text-xs md:text-sm"></span>
            </p>
            <p class="xs:text-sm md:text-xl text-primary font-semibold">
              Total: <span className="xs:text-xs md:text-sm"></span>
            </p>
          </div>

          <label htmlFor="status">Status: </label>
          <select name="status" id="" className="border border-primary rounded">
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Delivered</option>
          </select>
          <div>
            <p>3 toys for $</p>
            <p>3 home for $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
