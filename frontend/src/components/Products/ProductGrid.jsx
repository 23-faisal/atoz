
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
   
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {products?.map((product, index) => (
        <Link to={`/product/${product._id}`} key={index}>
          <div className="bg-white p-4 rounded-lg ">
            <div className="w-full h-96 mb-4">
              <img
                src={product?.images[0]?.url}
                alt={product?.images[0]?.altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm sm:text-md mb-2 ">{product.name}</h3>
            <p className="text-slate-500 font-medium text-sm tracking-tighter flex items-center gap-4">
              <span className="line-through">
                {product.discountPrice && product.price}
              </span>
              <span>{product.discountPrice}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
