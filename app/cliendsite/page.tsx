import Sidebar from "@/components/Sidebar/sidebar";
import Dashboard from "@/components/Dashboard/dashboard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <Dashboard />
      </div>

      {/* <Sidebar />
      <Dashboard /> */}
    </>
  );
};

export default page;
