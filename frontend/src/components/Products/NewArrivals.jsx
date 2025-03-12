import products from "@/data/products";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "../Common/Slider";

const NewArrivals = () => {
  const newArrivals = products;

  return (
    <section className=" my-10  lg:px-0">
      <div className="container mx-auto text-center mb-10 relative  ">
        <h1 className="text-3xl font-bold mb-4 ">Newest Arrivals</h1>
        <p className="text-lg text-slate-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* scroll buttons */}
        {/* <div className="absolute right-0 bottom-[-30px] flex space-x-2  ">
          <button className="p-2 rounded border bg-white text-black ">
            <FaAngleLeft className="h-6 w-6" />
          </button>
          <button className="p-2 rounded border bg-white text-black ">
            <FaAngleRight className="h-6 w-6" />
          </button>
        </div> */}
      </div>

      {/* scrollable content */}

      <div className="container mx-auto w-full  ">
        <Slider newArrivals={newArrivals} />
      </div>

      {/*  */}
    </section>
  );
};

export default NewArrivals;
