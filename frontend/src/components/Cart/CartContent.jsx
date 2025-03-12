import { FiTrash } from "react-icons/fi";

const cartProducts = [
  {
    productId: 1,
    name: "T-shirt",
    size: "M",
    color: "red",
    quantity: 1,
    price: 12,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Hoddie",
    size: "M",
    color: "red",
    quantity: 5,
    price: 18,
    image: "https://picsum.photos/200?random=2",
  },
  {
    productId: 3,
    name: "T-shirt",
    size: "M",
    color: "yellow",
    quantity: 1,
    price: 23,
    image: "https://picsum.photos/200?random=3",
  },
  {
    productId: 4,
    name: "Jeans",
    size: "M",
    color: "Blue",
    quantity: 2,
    price: 19,
    image: "https://picsum.photos/200?random=4",
  },
];

const CartContent = () => {
  return (
    <div>
      {cartProducts?.map((product, index) => (
        <div
          className="flex items-start justify-between py-4 border-b"
          key={index}
        >
          <div className="flex items-start">
            <img
              className="w-20 h-24 object-cover mr-4 rounded"
              src={product.image}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-slate-500">
                {" "}
                {product.size} | {product.color}
              </p>
              <div className="flex items-center mt-2   ">
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  -
                </button>
                <span className="mx-4 ">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium ">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p>$ {product.price.toLocaleString() * product.quantity}</p>
            <button>
              <FiTrash className="h-6 w-6 mt-2 text-red-500 " />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
