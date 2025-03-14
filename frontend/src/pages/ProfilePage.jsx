import { Button } from "@/components/ui/button";
import MyOrders from "./MyOrders";

const ProfilePage = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };
  return (
    <div className="  flex flex-col ">
      <div className=" container mx-auto  p-4 md:p-8 ">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 ">
          {/* left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6  ">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-lg text-slate-600 mb-4">john@emample.com</p>
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full "
            >
              Log Out
            </Button>
          </div>

          {/* right section - order table */}

          <div className="w-full md:w-2/3 lg:3/4">
            <MyOrders />
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
