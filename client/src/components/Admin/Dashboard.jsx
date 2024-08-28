import React from "react";
import Searchbar from "../Products/Searchbar";
import ProductsDashboard from "./ProductsDashboard";

const Dashboard = () => {
  return (
    <div className="my-10 p-3">
      <h2 className="text-4xl font-semibold text-center my-10">Dashboard</h2>
      <Searchbar />
      <div className="w-full overflow-x-auto my-10">
        <div className="min-w-[850px] mx-auto custom-scrollbar">
          <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left px-4 py-2 border border-black">
                  Image
                </th>
                <th className="text-center px-4 py-2 border border-black">Name</th>
                <th className="text-center px-4 py-2 border border-black">Description</th>
                <th className="text-center px-4 py-2 border border-black">Price</th>
                <th className="text-center px-4 py-2 border border-black">Offer(%)</th>
                <th className="text-center px-4 py-2 border border-black">Actions</th>
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
