import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="p-6 ">
      <div className="mb-6 ">
        <Link to="/admin" className="text-2xl font-medium text-white">
          atoz
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center ">Admin Dashboard</h2>

      {/* nav */}

      <nav className="flex flex-col space-y-2 ">
        <NavLink
          to="/admin/users"
          className={`${({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}`}
        >
          <FaUser className="w-6 h-6 " />{" "}
          <span className="ml-4 text-xl ">Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={`${({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}`}
        >
          <FaBoxOpen className="w-6 h-6 " />{" "}
          <span className="ml-4 text-xl ">Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={`${({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}`}
        >
          <FaClipboardList className="w-6 h-6 " />{" "}
          <span className="ml-4 text-xl ">Orders</span>
        </NavLink>

        <NavLink
          to="/admin/shop"
          className={`${({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}`}
        >
          <FaStore className="w-6 h-6 " />{" "}
          <span className="ml-4 text-xl ">Shop</span>
        </NavLink>

        <Button
          onClick={handleLogout}
          variant="destructive"
          className="text-lg mt-4 "
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </Button>
      </nav>

      {/*  */}
    </div>
  );
};

export default AdminSidebar;
