import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          <button className="md:hidden">
            <CgMenuRight className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </nav>
      {/* Cart drawer */}
      <CartDrawer toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen} />
    </>
  );
};

export default Navbar;
