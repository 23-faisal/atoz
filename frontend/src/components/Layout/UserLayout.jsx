import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const UserLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen  ">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex flex-grow">
        <p>Hello</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
