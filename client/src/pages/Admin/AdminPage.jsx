import React from 'react'
import Dashboard from '../../components/Admin/Dashboard'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import Filter from '../../components/Filter/Filter';
import { useFilter } from "../../contexts/Filter/FilterProvider";

const AdminPage = () => {
  const { isFilterVisible } = useFilter();
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