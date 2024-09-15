import React, { createContext, useState, useContext } from "react";
import axios from "../../api/axios";
import { useLoader } from "../Loader/LoaderProvider";

// Create the context
export const AdminContext = createContext();

// Create the provider component
export const AdminProvider = ({ children }) => {
  const { showLoader, hideLoader } = useLoader();
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to check if the user is an admin
  const checkAdmin = async (id) => {
    try {
      showLoader();
      const { data } = await axios.post("auth/check-admin", { id });

      if (data.user_role === "admin") {
        setIsAdmin(true);
        return true;
      } else {
        setIsAdmin(false);
        return false;
      }
    } catch (err) {
      console.error("Failed to verify admin:", err);
      setIsAdmin(false);
      return false;
    } finally {
      hideLoader();
    }
  };

  return (
    <AdminContext.Provider value={{ checkAdmin, isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook to use the Admin context
export const useAdmin = () => useContext(AdminContext);
