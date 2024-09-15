import React, {useEffect} from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AddCategory from "../../components/Admin/AddCategory";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../contexts/Admin/AdminProvider";

const AddCategoryPage = () => {
  const { checkAdmin } = useAdmin();
  const navigate = useNavigate();

  const adminCheck = async (userId) => {
    try {
      const isAdmin = await checkAdmin(userId);
      if (!isAdmin) {
        navigate("/"); // Redirect to home page if not an admin
      }
    } catch (error) {
      console.log("Error checking admin status:", error);
      navigate("/"); // Redirect if error occurs during admin check
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user || user.role !== "admin") {
      navigate("/"); // Redirect to home if not logged in or not an admin
      return;
    }

    // Perform admin check based on user ID
    adminCheck(user.user_id);
  }, [navigate]);
  return (
    <>
      <AdminNavbar />
      <AddCategory />
    </>
  );
};

export default AddCategoryPage;
