import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* mobile toggle button */}

      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 ">
        <button className="focus:outline-none" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="w-6 h-6" />
          )}
        </button>
        <h1 className="ml-4 font-medium text-xl">Admin Dashboard</h1>
      </div>

      {/* overlay for mobile sidebar */}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}

      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static  md:block ease-in-out z-20`}
      >
        <AdminSidebar />
      </div>

      {/* main content */}

      <div  className="flex-1 p-6 overflow-hidden">
        <Outlet />
      </div>

      {/*  */}
    </div>
  );
};

export default AdminLayout;
