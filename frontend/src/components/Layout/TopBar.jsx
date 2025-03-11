import React from "react";
import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-hello-red text-white">
      <div className="container mx-auto flex items-center   justify-between py-3 px-4 ">
        {/* social links */}
        <div className="hidden md:flex items-center  space-x-4 ">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition ease-in-out duration-150 "
          >
            <FaMeta className="h-5 w-5 " />
          </a>
          <a
            href="https://x.com/faisalahmed_23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition ease-in-out duration-150 "
          >
            <FaXTwitter className="h-5 w-5 " />
          </a>
          <a
            href="https://www.instagram.com/23.faisal_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition ease-in-out duration-150 "
          >
            <FaInstagram className="h-5 w-5 " />
          </a>
        </div>
        {/* middle part */}
        <div className=" flex-grow text-center ">
          <p className="">We ship worldwide - Fast & reliable service</p>
        </div>

        {/* phone number */}
        <div className="hidden md:block">
          <p className="   hover:text-gray-300">+0123456789</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
