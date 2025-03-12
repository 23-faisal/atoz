import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaInstagram, FaMeta, FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="border-t py-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 ">
        {/*  */}
        <div>
          <h3 className="text-lg text-slate-800 mb-4 ">News letter</h3>
          <p className="text-slate-500 mb-4 ">
            Be the first to hear about our products, exclusive events and online
            offers.
          </p>
          <p className=" font-medium text-sm text-slate-600 mb-2  ">
            Sign up & get 10% discount on your first order.
          </p>

          {/* newsletter form  */}

          <form className="flex gap-2">
            <Input type="text" placeholder="Enter your email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        {/*  */}

        <div>
          {/* shop links */}
          <h3 className="text-lg text-slate-800 mb-4  ">Shop</h3>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Women's Bottom wear
              </Link>
            </li>
          </ul>
        </div>

        {/*  */}

        <div>
          {/* supports */}
          <h3 className="text-lg text-slate-800 mb-4  ">Supports</h3>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-slate-500 transition-colors ">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/*  */}

        <div>
          {/* follow us */}
          <h3 className="text-lg text-slate-800 mb-4  ">Follow us</h3>
          <div className="flex items-center space-x-4 mb-6">
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

          <p>Call us</p>
          <p className="flex items-center gap-2 text-md hover:text-slate-500 transition-colors ">
            <FiPhoneCall />
            <span>+0123456789</span>
          </p>
        </div>

        {/*  */}
      </div>

      {/* copyright stuff */}

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-slate-200 pt-6  ">
        <p className="text-slate-500 text-sm tracking-tighter text-center ">
          © {year} atoz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
