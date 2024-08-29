import React from 'react'

const OrdersFilter = () => {
  return (
    <>
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
    </>
  );
}

export default OrdersFilter