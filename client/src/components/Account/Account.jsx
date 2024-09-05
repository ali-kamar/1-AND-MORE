import React, { useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Account = () => {

  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const { user_id } = user;
    const account = axios.get(`user/account/${user_id}`);
    console.log(account.data);
  } catch (error) {
    console.log(error);
    
  }

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Account</h2>
        <form action="#" method="post" autoComplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Save
            </button>
            <button
              type="submit"
              className="mt-2 block w-full py-2 text-center text-white bg-black border hover:border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
