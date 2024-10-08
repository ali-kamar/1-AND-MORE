import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import Notification from "../Notification/Notification";
import { useLoader } from "../../contexts/Loader/LoaderProvider";

const Login = () => {
  const { isOpen, notification, showNotification } = useNotification();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showLoader, hideLoader } = useLoader();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      showLoader();
      const response = await axios.post("/auth/login", { email, password });

      // Assuming the token is returned in the response data
      localStorage.setItem("token", response.data.token);

      const userObject = {
        user_id: response.data.user_id,
        role: response.data.role,
        cart: [], // In case cart is not provided, default to an empty array
        wishlist: [], // In case wishlist is not provided, default to an empty array
      };
      localStorage.setItem("user", JSON.stringify(userObject));
      if (response.data.role === "admin") navigate("/admin");
      else navigate("/")
    } catch (error) {
      showNotification("Email or password is incorrect!", "error");
    } finally {
      hideLoader();
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">Welcome back, customer</p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail@domain.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-primary">
            Register now
          </a>
        </p>
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default Login;
