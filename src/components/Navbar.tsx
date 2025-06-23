import React from "react";
import { useNavigate } from "react-router-dom";
import { useIsActiveNav } from "../utils/activeNav";
import { SiGamejolt } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../redux/store/store";
import { closeSidebar, openSidebar } from "../redux/slices/sideBarSlice";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { FaShop, FaStar } from "react-icons/fa6";

const NavItem = [
  {
    label: "Main",
    icon: <FaHome size={20} />,
    path: "/main",
  },
  {
    label: "Shopping",
    icon: <FaShop size={20} />,
    path: "/shopping",
  },
  {
    label: "Favourites",
    icon: <FaStar size={20} />,
    path: "/favourites",
  },
  {
    label: "Friends",
    icon: <FaUserFriends size={20} />,
    path: "/friends",
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  return (
    <nav className="fixed z-40 shadow-md flex items-center justify-between gap-3 py-10 top-0 right-0 left-0 h-[50px] bg-red-600 px-4 md:px-8 lg:px-16 xl:px-32">
      <ul className="hidden md:flex items-center gap-10 ">
        {NavItem.map(({ label, path }) => {
          return (
            <p
              key={label}
              className={`text-white cursor-pointer font-medium ${
                useIsActiveNav(path) ? "border-b-2 border-b-white" : ""
              }`}
              onClick={() => navigate(path)}
            >
              {label}
            </p>
          );
        })}
      </ul>
      <IoMenu
        size={26}
        className="md:hidden text-white"
        onClick={() => dispatch(openSidebar())}
      />
      <SideBar />
      <span className="flex font-bold text-2xl cursor-default items-center text-white gap-3">
        <p>Gamehub</p>
        <SiGamejolt />
      </span>
    </nav>
  );
};

export default Navbar;

const SideBar: React.FC = () => {
  const { isOpen } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <aside
      className={`w-64 fixed flex flex-col transition-all duration-150 gap-2 md:hidden top-0 bottom-0 ${
        !isOpen ? "-translate-x-full" : ""
      }  left-0 bg-red-800 p-3`}
    >
      <RxCross2
        size={26}
        className="text-white cursor-default m-2"
        onClick={() => dispatch(closeSidebar())}
      />
      <div className="h-3" />
      {NavItem?.map((nav) => {
        return (
          <p
            key={nav.label}
            onClick={() => navigate(nav.path)}
            className={` py-2 hover:bg-white/30 flex items-center text-white gap-3 px-3 ${
              useIsActiveNav(nav.path) ? " bg-white/30" : ""
            }`}
          >
            {nav.icon} {nav.label}
          </p>
        );
      })}
    </aside>
  );
};
