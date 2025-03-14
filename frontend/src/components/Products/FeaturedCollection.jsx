import { Link } from "react-router-dom";
import featuredImage from "@/assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row  items-center bg-green-50 rounded-3xl ">
        {/* left */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left ">
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Comfort and style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 ">
            Apparel made for everyday life.
          </h2>
          <p className="text-lg text-slate-600 mb-6 ">
            Display high quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you feel and look great every
            day.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-4 rounded-lg hover:bg-slate-800 transition-all ease-in-out duration-100"
          >
            Collections
          </Link>
        </div>
        {/*  */}

        {/* right */}

        <div className="w-full lg:w-1/2 ">
          <img
            src={featuredImage}
            alt="featured image"
            className="rounded-t-lg lg:rounded-r-lg w-full h-full object-cover"
          />
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default FeaturedCollection;
