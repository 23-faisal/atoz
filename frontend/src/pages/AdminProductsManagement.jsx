import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const products = [
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    sku: "SKU001",
    description: "Description for product 1",
    category: "Category 1",
    stock: 10,
    image: "https://via.placeholder.com/150",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "2",
    name: "Product 2",
    price: 200,
    sku: "SKU002",
    description: "Description for product 2",
    category: "Category 2",
    stock: 20,
    image: "https://via.placeholder.com/150",
    createdAt: "2023-01-02",
    updatedAt: "2023-01-02",
  },
  {
    _id: "3",
    name: "Product 3",
    price: 300,
    sku: "SKU003",
    description: "Description for product 3",
    category: "Category 3",
    stock: 30,
    image: "https://via.placeholder.com/150",
    createdAt: "2023-01-03",
    updatedAt: "2023-01-03",
  },
];

const AdminProductsManagement = () => {
  const handleDelete = (productId) => {
    
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Product deleted:", productId);
      toast.success("Product deleted successfully!");
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">All Products</h1>

      <div className="overflow-x-auto sm:rounded-lg  ">
        <table className="min-w-full text-left text-slate-500 ">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length < 1 ? (
              <td
                colSpan={4}
                className="text-slate-500  font-medium  text-center mt-4"
              >
                Opps! No products found.
              </td>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-slate-100 cursor-pointer transition duration-300"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.sku}
                  </td>
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap flex gap-2">
                    <Link to={`/admin/products/${product._id}/edit`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <Button
                      onClick={() => handleDelete(product._id)}
                      variant="destructive"
                    >
                      Delete
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

export default AdminProductsManagement;
