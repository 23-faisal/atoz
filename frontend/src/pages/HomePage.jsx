import Hero from "@/components/Layout/Hero";
import GenderBasedCollection from "@/components/Products/GenderBasedCollection";
import NewArrivals from "@/components/Products/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <GenderBasedCollection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
