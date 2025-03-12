import Hero from "@/components/Layout/Hero";
import GenderBasedCollection from "@/components/Products/GenderBasedCollection";
import NewArrivals from "@/components/Products/NewArrivals";
import ProductDetails from "@/components/Products/ProductDetails";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <GenderBasedCollection />
      <NewArrivals />

      {/* Best seller */}

      <div className="mx-4">
        <h1 className="text-3xl text-center  font-bold mb-4 py-10 ">Best Seller</h1>
        <ProductDetails />
      </div>
    </div>
  );
};

export default HomePage;
