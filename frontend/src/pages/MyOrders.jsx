import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(new Date());

  useEffect(() => {
    // simulate fetching orders

    setTimeout(() => {
      const mokOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1 ",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "234567",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2 ",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: false,
        },
      ];

      setOrders(mokOrders);
    }, 1000);
  }, []);
  return (
    <div className="container mx-auto p-4 sm:p-6 ">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 "> My Orders</h2>

      <Table>
        <TableCaption>Your orders are right here</TableCaption>
        <TableHeader className="bg-slate-200   ">
          <TableRow className="rounded-xl">
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Shipping Address</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Prices</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">
                <img
                  src={order.orderItems[0]?.image}
                  alt={order.orderItems[0]?.image}
                />
              </TableCell>
              <TableCell className="font-medium">#{order._id}</TableCell>
              <TableCell className="font-medium">
                {new Date(order.createdAt).toLocaleTimeString()} |{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="font-medium">
                {order.shippingAddress
                  ? `${order.shippingAddress.city}`
                  : "N/A"}
              </TableCell>

              <TableCell className="font-medium">
                {order.orderItems.length}
              </TableCell>
              <TableCell className="font-medium">
                $ {order.totalPrice}
              </TableCell>

              <TableCell className="text-right">
                {order.isPaid ? (
                  <span className="px-2 p-1 rounded-full text-xs sm:text-sm bg-green-100 text-green-700">
                    paid
                  </span>
                ) : (
                  <span className="px-2 p-1 rounded-full text-xs sm:text-sm bg-red-100 text-red-700">
                    pending
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default MyOrders;
