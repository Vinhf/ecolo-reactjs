import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/AdminComponents/Header/Header";
import Sidebar from "../../components/AdminComponents/Header/SideBar";


const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Header toggleSidebar={toggleSidebar} />
      <div className="admin-container">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
