import { useEffect, useState } from "react";
import products from "@/data/products";
import SortOptions from "@/components/Products/SortOptions";
import ProductGrid from "@/components/Products/ProductGrid";
import FilterSidebar from "@/components/Products/FilterSidebar";

const CollectionPage = () => {
  const [collectionProduct, setCollectionProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCollectionProduct(products);
    }, 1000);
  }, []);

  
  return (
    <div className="flex flex-col lg:flex-row   ">
      {/* Mobile filter button */}

      {/* filter sidebar  */}


      <div >
        <FilterSidebar />
      </div>

      {/* all collection */}

      <div className="flex-grow p-4">
        <h1 className="text-2xl uppercase mb-4 ">All Collection</h1>

        <SortOptions />

        {/* Product Grid */}

        <ProductGrid products={collectionProduct} />
      </div>

      {/*  */}
    </div>
  );
};

export default CollectionPage;
