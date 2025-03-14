import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaRecycle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="px-4 lg:px-0 py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center ">
          <div className="p-4 rounded-full mb-4 ">
            <RiShoppingBag4Fill className="h-10 w-10   " />
          </div>
          <h4 className="uppercase tracking-tighter mb-2 ">
            free international shipping
          </h4>
          <p className="text-slate-600 text-sm tracking-tighter ">
            On all orders over $100.00
          </p>
        </div>

        {/* Featured 2 */}
        <div className="flex flex-col items-center ">
          <div className="p-4 rounded-full mb-4 ">
            <FaRecycle className="h-10 w-10   " />
          </div>
          <h4 className="uppercase tracking-tighter mb-2 ">45 days return</h4>
          <p className="text-slate-600 text-sm tracking-tighter capitalize">
            money back guarantee
          </p>
        </div>

        {/* Featured 3 */}
        <div className="flex flex-col items-center ">
          <div className="p-4 rounded-full mb-4 ">
            <FaCreditCard className="h-10 w-10   " />
          </div>
          <h4 className="uppercase tracking-tighter mb-2 ">select checkout</h4>
          <p className="text-slate-600 text-sm tracking-tighter capitalize">
            100% secure checkout process
          </p>
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default FeatureSection;
