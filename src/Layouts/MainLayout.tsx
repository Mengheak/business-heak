import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";

const MainLayout: React.FC = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  return (
    <section>
      <Navbar />
      <div
        className={`mt-32 px-4 md:px-8 lg:px-16 xl:px-32 ${
          isOpen ? "bg-black/20" : ""
        }`}
      >
        <Outlet />
      </div>
      <div className="h-10"></div>
    </section>
  );
};

export default MainLayout;
