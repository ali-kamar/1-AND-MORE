import React, { useState } from "react";
import axios from "../../api/axios"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import Notification from "../Notification/Notification";

const Register = () => {
  const navigate = useNavigate();
  const { isOpen, notification, showNotification } = useNotification();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showNotification("Passwords do not match!", "error");
      return;
    }

    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      // Assuming the token is returned in the response data
      localStorage.setItem("token", response.data.token);

      const userObject = {
        user_id: response.data.user_id,
        role: response.data.role,
        cart: [], // In case cart is not provided, default to an empty array
        wishlist: [], // In case wishlist is not provided, default to an empty array
      };
      localStorage.setItem("user", JSON.stringify(userObject));

      navigate("/");
    } catch (error) {
      showNotification(error.response.data.msg, "error");
    }
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">Register for new customer</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="fulan fulana"
                required
              />
            </div>
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
            <div>
              <label htmlFor="confirm" className="text-gray-600 mb-2 block">
                Confirm password
              </label>
              <input
                type="password"
                name="confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Create account
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Login now
          </a>
        </p>
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default Register;
