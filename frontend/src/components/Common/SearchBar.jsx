import { Cross } from "lucide-react";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search: ", searchTerm);
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300  ${
        isOpen ? "absolute top-0 left-0 w-full  bg-white  h-24 z-50 " : "auto"
      }`}
    >
      {isOpen ? (
        <>
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center w-full space-x-4"
          >
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 py-2 pl-2 pr-10 rounded-lg focus:outline-none placeholder-text-slate-700 w-full"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <CgSearch className="h-6 w-6 text-slate-700" />
              </button>
            </div>

            {/* close button */}
            <button onClick={handleSearchToggle} className="">
              <RxCross2 className="w-6 h-6 text-hello-red" />
            </button>
          </form>
        </>
      ) : (
        <>
          <button onClick={handleSearchToggle}>
            <CgSearch className="h-6 w-6 text-slate-700" />
          </button>
        </>
      )}
    </div>
  );
};

export default SearchBar;
