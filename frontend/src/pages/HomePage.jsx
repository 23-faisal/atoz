import Hero from "@/components/Layout/Hero";
import FeaturedCollection from "@/components/Products/FeaturedCollection";
import FeatureSection from "@/components/Products/FeatureSection";
import GenderBasedCollection from "@/components/Products/GenderBasedCollection";
import NewArrivals from "@/components/Products/NewArrivals";
import ProductDetails from "@/components/Products/ProductDetails";
import ProductGrid from "@/components/Products/ProductGrid";
import products from "@/data/products";

const HomePage = () => {
  const womenProduct = products.slice(4, 12);
  return (
    <div>
      <Hero />
      <GenderBasedCollection />
      <NewArrivals />

      {/* Best seller */}

      <div className="mx-4">
        <h1 className="text-3xl text-center  font-bold mb-4 py-10 ">
          Best Seller
        </h1>
        <ProductDetails />
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 ">
          Top Wears for Women
        </h2>
        <ProductGrid products={womenProduct} />
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
