import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b-2  border-slate-200">
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      {/* Cart Drawer */}
    </div>
  );
};

export default Header;
