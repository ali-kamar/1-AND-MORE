import React from "react";
import Searchbar from "../Products/Searchbar";
import ProductsDashboard from "./ProductsDashboard";

const Dashboard = () => {
  return (
    <div className="my-10 p-3">
      <div className="flex justify-end">
        <button className="bg-primary items-center border rounded border-primary text-white p-4 hover:bg-transparent hover:text-primary transition">
          Add Product
        </button>
      </div>
      <h2 className="text-4xl font-semibold text-center my-10">Dashboard</h2>
      <Searchbar />
      <div className="w-full overflow-x-auto my-10">
        <div className="min-w-[850px] mx-auto custom-scrollbar">
          <table className="w-full border border-gray-300 ">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Image</th>
                <th className="text-center px-4 py-2">Name</th>
                <th className="text-center px-4 py-2">Description</th>
                <th className="text-center px-4 py-2">Price</th>
                <th className="text-center px-4 py-2">Offer(%)</th>
                <th className="text-center px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <ProductsDashboard />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
