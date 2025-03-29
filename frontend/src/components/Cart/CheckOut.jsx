import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { FaPaypal } from "react-icons/fa";

const CheckOut = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkoutId, setCheckoutId] = useState(true);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const mockOrders = [
    {
      _id: "12345",
      createdAt: new Date(),
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        { name: "Product 1", image: "https://picsum.photos/500/500?random=1" },
      ],
      totalPrice: 100,
      isPaid: true,
    },
    {
      _id: "234567",
      createdAt: new Date(),
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        { name: "Product 2", image: "https://picsum.photos/500/500?random=2" },
      ],
      totalPrice: 200,
      isPaid: false,
    },
  ];

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section - Checkout Form */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold uppercase mb-4">Checkout</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
            <div className="mb-4">
              <label>Email</label>
              <input
                disabled
                value="user@example.com"
                type="email"
                className="bg-slate-100 text-slate-500 rounded-lg p-2 w-full mb-1"
                placeholder="Email"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label>Last Name</label>
                <Input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label>Address</label>
              <Input
                {...register("address", { required: "Address is required" })}
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label>City</label>
                <Input
                  {...register("city", { required: "City is required" })}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label>Postal Code</label>
                <Input
                  {...register("postalCode", {
                    required: "Postal code is required",
                  })}
                  placeholder="Postal Code"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label>Country</label>
              <Input
                {...register("country", { required: "Country is required" })}
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label>Phone</label>
              <Input
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="mt-6">
              {!checkoutId ? (
                <Button type="submit" className="w-full">
                  Continue to Payment
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white "
                  variant="default"
                >
                  <span className="mr-2">Pay with PayPal</span>
                  <FaPaypal />
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold uppercase mb-4">Order Summary</h2>
          {mockOrders.map((order) => (
            <div
              key={order._id}
              className="mb-4 p-4 border rounded-lg shadow-sm"
            >
              <p className="text-lg font-semibold">
                {order.orderItems[0].name}
              </p>
              <p className="text-gray-500">
                {order.shippingAddress.city}, {order.shippingAddress.country}
              </p>
              <p className="font-bold">Total Price: ${order.totalPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
