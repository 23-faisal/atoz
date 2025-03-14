import products from "@/data/products";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const selectedProducts = products.slice(-1)[0];

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

  return (
    <div className="container mx-auto  mt-10 ">
      <div className=" flex flex-col md:flex-row  ">
        {/* left side */}

        <div className="hidden md:flex flex-col mr-6 space-y-4  ">
          {selectedProducts.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image.url)}
              key={index}
              src={image.url}
              alt={image.altText}
              className={`${
                image.url === mainImage && "border-2 border-black"
              }   h-20 w-20 object-cover rounded-lg cursor-pointer `}
            />
          ))}
        </div>

        {/* main image  */}

        <div className="md:w-1/2">
          <div className="mb-4 ">
            <img
              src={mainImage || selectedProducts.images[0].url}
              alt={selectedProducts.images[0].altText || selectedProducts.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mobile Thumbnail */}

        <div className="md:hidden flex overscroll-x-scroll space-x-4">
          {selectedProducts.images.map((image, index) => (
            <div key={index} className="">
              <img
                onClick={() => setMainImage(image.url)}
                src={image.url}
                alt={image.altText}
                className={`${
                  image.url === mainImage && "border-2 border-black"
                }  h-20 w-20 object-cover rounded-lg cursor-pointer `}
              />
            </div>
          ))}
        </div>

        {/* Right Side */}

        <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 ">
            {selectedProducts.name}
          </h1>
          <p className="text-lg text-slate-600 mb-1 line-through">
            $ {selectedProducts.discountPrice && `${selectedProducts.price}`}
          </p>

          <p className="text-lg text-slate-600 mb-2">
            $ {selectedProducts.discountPrice}
          </p>

          <p className="text-slate-600 mb-4 ">{selectedProducts.description}</p>

          <div className="mb-4">
            <p className="text-slate-700 ">Color: </p>
            <div className="flex gap-2 mt-2">
              {selectedProducts.colors.map((color) => (
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

            {/* size  */}

            <div className="mb-4">
              <p className="text-slate-700 ">Sizes: </p>
              <div className="flex gap-2 mt-2">
                {selectedProducts.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={` h-8 w-8 rounded  border  ${
                      selectedSize === size && "bg-slate-700 text-white "
                    }  `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/*  */}

            <div className="mb-6">
              <p className="text-slate-700 ">Quantity: </p>

              <div className="flex items-center space-x-4 mt-2 ">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className={`h-8 w-8 rounded bg-slate-200 text-lg   border   ${
                    quantity < 2 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  -
                </button>
                <span className="text-lg ">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="h-8 w-8 rounded bg-slate-200 text-lg   border "
                >
                  +
                </button>
              </div>
            </div>

            {/*  */}
            <Button
              onClick={handleAddToCart}
              disabled={isButtonDisable}
              className={` w-full py-1 text-md mb-4 uppercase ${
                isButtonDisable ? " cursor-not-allowed" : ""
              }`}
            >
              {isButtonDisable ? "Adding..." : "Add to Cart"}
            </Button>

            {/*  */}

            <div className="mt-10 text-slate-700 ">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-slate-600">
                <tbody>
                  <tr>
                    <td className="py-1 ">Brand</td>
                    <td className="py-1 ">{selectedProducts.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 ">Material</td>
                    <td className="py-1 ">{selectedProducts.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*  */}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default ProductDetails;
