import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const AdminOrderManagementPage = () => {
  const [orders, setOrders] = useState([
    {
      _id: 12345678,
      user: {
        name: "John Doe",
        email: "john@emample.com",
      },
      totalPrice: 100.5,
      status: "Pending",
    },
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    // Update the status in state
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    console.log("Order Id:", orderId, ", New Status: ", newStatus);
    toast.success(`Status changed to ${newStatus} for order #${orderId}`);
  };
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 ">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Order Management</h1>

      <div className="overflow-x-auto rounded-md md:rounded-lg">
        <table className="min-w-full text-left text-slate-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3 ">Order ID</th>
              <th className="px-4 py-3 ">Customer</th>
              <th className="px-4 py-3 ">Total Price </th>
              <th className="px-4 py-3 ">Status</th>
              <th className="px-4 py-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length < 1 ? (
              <tr className="text-center mt-4 font-medium text-slate-500">
                <td
                  colSpan="5"
                  className="text-slate-500  font-medium  text-center mt-4"
                >
                  <span className="text-lg font-semibold">No Orders Found</span>
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="px-4 py-2">#{order._id}</td>
                  <td className="px-4 py-2">{order.user.name}</td>
                  <td className="px-4 py-2">${order.totalPrice}</td>
                  <td className="px-4 py-2">
                    <Select
                      value={order.status}
                      onValueChange={(newStatus) =>
                        handleStatusChange(order._id, newStatus)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Processing">Processing</SelectItem>
                          <SelectItem value="Shipped">Shipped</SelectItem>
                          <SelectItem value="Delivered">Delivered</SelectItem>
                          <SelectItem value="Canceled">Canceled</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </td>

                  <td className="px-4 py-2">
                    <Button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-600 hover:bg-green-700 active:bg-green-800"
                      disabled={order.status === "Delivered"}
                    >
                      Mark as Delivered
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderManagementPage;
