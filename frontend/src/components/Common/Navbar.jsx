import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const mobileNavbarToggle = () => {
    setMobileNavbarOpen(!mobileNavbarOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6  ">
        {/* left */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            atoz
          </Link>
        </div>

        {/* center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-slate-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-slate-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-slate-700 hover:text-black text-sm font-medium uppercase"
          >
            Top wear
          </Link>
          <Link
            to="/"
            className="text-slate-700 hover:text-black text-sm font-medium uppercase"
          >
            bottom wear
          </Link>
        </div>

        {/* right - icons */}
        <div className="flex items-center  space-x-4">
          <Link
            to="/"
            className="text-slate-700 hover:text-black text-sm font-medium uppercase"
          >
            <CgProfile className="w-6 h-6 " />
          </Link>
          <button onClick={toggleCartDrawer} className="relative">
            <IoBagOutline className="h-6 w-6  text-slate-700" />
            <span className="absolute  -top-1 bg-hello-red  px-2  rounded-full  ">
              {4}
            </span>
          </button>

          {/* search */}

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* hamburger icon */}
          <button onClick={mobileNavbarToggle} className="md:hidden">
            <CgMenuRight className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </nav>
      {/* Cart drawer */}
      <CartDrawer toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen} />

      {/* mobile navigation  */}

      <div
        className={`  fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50  ${
          mobileNavbarOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        {/* nav close button */}
        <div className="flex justify-end p-4">
          <button onClick={mobileNavbarToggle}>
            <IoClose className="h-6 w-6 text-red-600 " />
          </button>
        </div>

        {/* nav menu  */}
        <div className=" ">
          <h2 className="text-xl font-semibold mb-4 border-b-2 pl-4 pb-4 ">Menu</h2>
          <nav className="space-y-4 p-4  ">
            <Link
              onClick={mobileNavbarToggle}
              to="/"
              className="uppercase  block text-slate-700 "
            >
              MEN
            </Link>
            <Link
              onClick={mobileNavbarToggle}
              to="/"
              className="uppercase block text-slate-700 "
            >
              women
            </Link>
            <Link
              onClick={mobileNavbarToggle}
              to="/"
              className="uppercase block text-slate-700 "
            >
              top wear
            </Link>
            <Link
              onClick={mobileNavbarToggle}
              to="/"
              className="uppercase block text-slate-700 "
            >
              bottom wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
