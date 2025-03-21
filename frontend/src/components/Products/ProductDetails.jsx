import { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import { toast } from "sonner";
import products from "@/data/products"; // Your products data
import { Button } from "../ui/button"; // Assuming Button is a component in your UI library
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  // Extract productId from the URL using useParams hook
  const { productId } = useParams();

  // Find the product from the products array
  const selectedProduct = products.find((product) => product._id === productId);

  // If no product is found, show a "Sorry, no product available" message
  const similarProduct = products
    .filter((product) => product._id !== productId)
    .slice(0, 4); // Get similar products (excluding the selected one)

  const [mainImage, setMainImage] = useState(
    selectedProduct ? selectedProduct.images[0].url : ""
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!selectedColor || !selectedSize) {
      toast.error(
        "Please select a size and a color before adding to the cart",
        {
          duration: 2000,
        }
      );
      return;
    }
    setIsButtonDisable(true);

    setTimeout(() => {
      toast.success("Product added to the cart successfully!", {
        duration: 2000,
      });
      setIsButtonDisable(false);
    }, 1000);
  };

  if (!selectedProduct) {
    return (
      <div className="container mx-auto mt-10">
        <p className="text-center text-xl font-semibold">
          Sorry, no product available
        </p>
        {/* Show "You may like" section if no product is found */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-2">
            Products you may like
          </h2>
          {similarProduct.length > 0 ? (
            <ProductGrid products={similarProduct} />
          ) : (
            <p className="text-center text-lg">No similar products available</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image Thumbnails */}
        <div className="hidden md:flex flex-col mr-6 space-y-4">
          {selectedProduct.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image.url)}
              key={index}
              src={image.url}
              alt={image.altText}
              className={`${
                image.url === mainImage ? "border-2 border-black" : ""
              } h-20 w-20 object-cover rounded-lg cursor-pointer`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <img
              src={mainImage || selectedProduct.images[0].url}
              alt={selectedProduct.images[0].altText || selectedProduct.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {selectedProduct.name}
          </h1>
          <p className="text-lg text-slate-600 mb-1 line-through">
            $ {selectedProduct.discountPrice && `${selectedProduct.price}`}
          </p>
          <p className="text-lg text-slate-600 mb-2">
            $ {selectedProduct.discountPrice}
          </p>

          <p className="text-slate-600 mb-4">{selectedProduct.description}</p>

          {/* Color Selection */}
          <div className="mb-4">
            <p className="text-slate-700">Color: </p>
            <div className="flex gap-2 mt-2">
              {selectedProduct.colors.map((color) => (
                <button
                  onClick={() => setSelectedColor(color)}
                  key={color}
                  className={`h-8 w-8 rounded-full border ${
                    selectedColor === color
                      ? "border-4 border-[#33d9b2]"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <p className="text-slate-700">Sizes: </p>
            <div className="flex gap-2 mt-2">
              {selectedProduct.sizes.map((size) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={size}
                  className={`h-8 w-8 rounded border ${
                    selectedSize === size && "bg-slate-700 text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <p className="text-slate-700">Quantity: </p>
            <div className="flex items-center space-x-4 mt-2">
              <button
                onClick={() => handleQuantityChange("minus")}
                className={`h-8 w-8 rounded bg-slate-200 text-lg border ${
                  quantity < 2 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("plus")}
                className="h-8 w-8 rounded bg-slate-200 text-lg border"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isButtonDisable}
            className={`w-full py-1 text-md mb-4 uppercase ${
              isButtonDisable ? "cursor-not-allowed" : ""
            }`}
          >
            {isButtonDisable ? "Adding..." : "Add to Cart"}
          </Button>

          {/* Product Characteristics */}
          <div className="mt-10 text-slate-700">
            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
            <table className="w-full text-left text-sm text-slate-600">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProduct.brand}</td>
                </tr>
                <tr>
                  <td className="py-1">Material</td>
                  <td className="py-1">{selectedProduct.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* You may also like section */}
      {similarProduct.length > 0 ? (
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-2">
            You may also like
          </h2>
          <ProductGrid products={similarProduct} />
        </div>
      ) : (
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-2">
            Products you may like
          </h2>
          <p className="text-center text-lg">No similar products available</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
