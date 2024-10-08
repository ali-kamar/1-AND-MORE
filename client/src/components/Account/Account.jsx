import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Notification from "../Notification/Notification";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../contexts/Loader/LoaderProvider";

const Account = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const { showLoader, hideLoader } = useLoader();
  const { isOpen, notification, showNotification } = useNotification();
  useEffect(() => {

    const fetchAccount = async () => {
      try {
        showLoader()
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const { user_id } = user;
          setId(user_id);
          const { data } = await axios.get(`user/account/${user_id}`);
          if (data) {
            setEmail(data.email);
            setPrevEmail(data.email);
            setName(data.name);
          }
        
        } else {
          // Redirect to login if user is not found
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
      finally{
        hideLoader()
      }
    };
    fetchAccount();
  },[navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      showLoader()
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
      showNotification(error.response.data.msg, "error");
    }
    finally{
      hideLoader()
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
                id="name"
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
              type="button" // Changed to button to avoid form submission
              className="mt-2 block w-full py-2 text-center text-white bg-black border hover:border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
              }}
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
