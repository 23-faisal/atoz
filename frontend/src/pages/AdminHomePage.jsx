import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: "648d1a2b1234567890abcdef1",
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      totalPrice: 100.5,
      status: "Pending",
      createdAt: "2025-04-17T08:00:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef2",
      user: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      totalPrice: 75.25,
      status: "Processing",
      createdAt: "2025-04-16T15:30:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef3",
      user: {
        name: "Peter Jones",
        email: "peter.jones@example.com",
      },
      totalPrice: 210.0,
      status: "Shipped",
      createdAt: "2025-04-15T21:15:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef4",
      user: {
        name: "Alice Brown",
        email: "alice.brown@example.com",
      },
      totalPrice: 45.99,
      status: "Delivered",
      createdAt: "2025-04-14T10:45:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef5",
      user: {
        name: "David Wilson",
        email: "david.wilson@example.com",
      },
      totalPrice: 155.75,
      status: "Pending",
      createdAt: "2025-04-17T12:00:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef6",
      user: {
        name: "Sarah Garcia",
        email: "sarah.garcia@example.com",
      },
      totalPrice: 88.5,
      status: "Processing",
      createdAt: "2025-04-16T09:20:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef7",
      user: {
        name: "Michael Lee",
        email: "michael.lee@example.com",
      },
      totalPrice: 320.5,
      status: "Shipped",
      createdAt: "2025-04-15T18:00:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef8",
      user: {
        name: "Linda Hall",
        email: "linda.hall@example.com",
      },
      totalPrice: 62.0,
      status: "Delivered",
      createdAt: "2025-04-13T22:55:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdef9",
      user: {
        name: "Kevin Adams",
        email: "kevin.adams@example.com",
      },
      totalPrice: 112.99,
      status: "Pending",
      createdAt: "2025-04-17T11:30:00.000Z",
    },
    {
      _id: "648d1a2b1234567890abcdefa",
      user: {
        name: "Ashley Young",
        email: "ashley.young@example.com",
      },
      totalPrice: 95.75,
      status: "Processing",
      createdAt: "2025-04-16T14:40:00.000Z",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <h1 className=" text-2xl  md:text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full ">
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold "> Revenue</h2>
          <p className="text-2xl text-teal-600">$1000</p>
        </div>
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold "> Total Orders</h2>
          <p className="text-2xl text-teal-600">2</p>
          <Link
            to="/admin/orders"
            className="text-blue-500 hover:underline duration-300 transition-all"
          >
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold "> Total Products</h2>
          <p className="text-2xl text-teal-600">630</p>
          <Link
            to="/admin/products"
            className="text-blue-500 hover:underline duration-300 transition-all"
          >
            Manage Products
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-2 ">Recent Orders</h2>
        <div className="">
          <table className="min-w-full text-left text-slate-500 ">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b   hover:bg-gray-100 cursor-pointer transition  duration-300"
                  >
                    <td className="px-4 py-3">{order._id}</td>
                    <td className="px-4 py-3">{order.user.name}</td>
                    <td className="px-4 py-3">${order.totalPrice}</td>
                    <td className="px-4 py-3">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No recent orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
