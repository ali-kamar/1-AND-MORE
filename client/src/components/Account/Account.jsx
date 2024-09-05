import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Notification from "../Notification/Notification";
import { useNotification } from "../../contexts/Notification/NotificationProvider";

const Account = () => {
  const { isOpen, notification, showNotification } = useNotification();
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const { user_id } = user;
        setId(user_id);
        const { data } = await axios.get(`user/account/${user_id}`);
        if (data) {
          setEmail(data.email);
          setPrevEmail(data.email);
          setName(data.name);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccount();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (prevEmail === email) {
        const { data } = await axios.patch(`user/account/${id}`, { name });
        if (data) {
           showNotification("Account Updated Successfully!", "success");
        }
      } else {
        const { data } = await axios.patch(`user/account/${id}`, {
          name,
          email,
        });
        if (data) {
          showNotification("Account Updated Successfully!", "success");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [email, setEmail] = useState("");
  const [prevEmail, setPrevEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default Account;
