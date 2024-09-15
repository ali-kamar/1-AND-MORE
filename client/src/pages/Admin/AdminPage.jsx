import React, {useEffect} from 'react'
import Dashboard from '../../components/Admin/Dashboard'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import Filter from '../../components/Filter/Filter';
import { useFilter } from "../../contexts/Filter/FilterProvider";
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const { isFilterVisible } = useFilter();
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      // Check if there is no token or user is not an admin
      if (!token || !user || user.role !== "admin") {
        navigate("/");
        return;
      }
    }, [navigate]);

  return (
    <>
      <AdminNavbar />
      <Dashboard />
      {isFilterVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <Filter />
        </div>
      )}
    </>
  );
}

export default AdminPage