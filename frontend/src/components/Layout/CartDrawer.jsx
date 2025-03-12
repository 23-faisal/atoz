import { CgClose } from "react-icons/cg";
import { Button } from "../ui/button";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ toggleCartDrawer, drawerOpen }) => {
  return (
    <div
      className={`  top-0 right-0 fixed w-3/4  sm:w-1/2 md:w-[30rem]    h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full "
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4 ">
        <button onClick={toggleCartDrawer}>
          <CgClose className="h-6 w-6 text-red-500 " />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow overflow-auto p-4 ">
        <h2 className="text-xl font-semibold mb-4">Your cart</h2>
        {/* component for cart components */}
        <CartContent />
      </div>

      {/* checkout button fixed at the bottom  */}
      <div className="p-4  bg-white sticky bottom-0">
        <Button className="w-full ">Checkout </Button>
        <p className="text-sm tracking-tighter text-slate-500 mt-2 text-center  ">
          Shipping, taxing & discount codes are calculated on checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
