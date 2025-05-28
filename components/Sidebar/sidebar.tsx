"use client";

import {
  FaHome,
  FaChartBar,
  FaLayerGroup,
  FaClock,
  FaCalendarWeek,
  FaWallet,
  FaMapMarkedAlt,
  FaTags,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Image from "next/image";
import Logo from "@/components/assets/BMP-Logo.jpg";
import User from "@/components/assets/User.jpg";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BASE_PATH = "/cliendsite";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false); // Close sidebar on route change
  }, [pathname]);

  const handleLogout = () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.clear();
      router.push("/");
    }
  };

  const [user, setUser] = useState({
    name: "Anas Mohammed Riza",
    email: "rizanas0526rz@gmail.com",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser({
        name: localStorage.getItem("username") || "Anas Mohammed Riza",
        email: localStorage.getItem("useremail") || "rizanas0526rz@gmail.com",
      });
    }
  }, []);

  const navItems = [
    { icon: <FaHome />, label: "Dashboard", path: "" },
    { icon: <FaChartBar />, label: "Bookings", path: "bookings" },
    { icon: <FaLayerGroup />, label: "Slots & Rates", path: "slots-rates" },
    { icon: <FaClock />, label: "Time Slots", path: "time-slots" },
    { icon: <FaCalendarWeek />, label: "Weekly Slot & Rate", path: "weekly-slots" },
    { icon: <FaWallet />, label: "Wallet", path: "wallet" },
    { icon: <FaMapMarkedAlt />, label: "Turf", path: "turf" },
    { icon: <FaTags />, label: "Discounts", path: "discounts" },
    { icon: <FaUserCircle />, label: "Profile", path: "profile" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-md">
        <Image src={Logo} alt="Logo" width={100} height={32} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 h-screen bg-white shadow-lg flex flex-col justify-between z-50`}
      >
        {/* Top Logo */}
        <div>
          <div
            className="p-6 text-center cursor-pointer"
            onClick={() => router.push(BASE_PATH)}
          >
            <Image src={Logo} alt="Logo" width={133} height={42} />
          </div>

          {/* Navigation Items */}
          <nav className="px-4 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <SidebarLink
                key={index}
                icon={item.icon}
                label={item.label}
                path={item.path}
                currentPath={pathname}
                router={router}
              />
            ))}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="border-t mt-4 px-4 py-3">
          <SidebarLink
            icon={<FaCog />}
            label="Settings"
            path="settings"
            currentPath={pathname}
            router={router}
          />
          <div className="flex items-center mt-4">
            <Image
              src={User}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <FaSignOutAlt
              className="ml-auto text-gray-400 hover:text-gray-700 cursor-pointer"
              onClick={handleLogout}
              title="Logout"
              aria-label="Logout"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({
  icon,
  label,
  path,
  currentPath,
  router,
}: {
  icon: React.ReactNode;
  label: string;
  path: string;
  currentPath: string;
  router: ReturnType<typeof useRouter>;
}) => {
  const fullPath = path ? `${BASE_PATH}/${path}` : BASE_PATH;
  const isActive =
    currentPath === fullPath || currentPath.startsWith(`${fullPath}/`);

  return (
    <div
      onClick={() => router.push(fullPath)}
      className={`flex items-center px-4 py-2 rounded cursor-pointer text-sm font-medium transition-colors ${
        isActive ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
      title={label}
    >
      <span className="mr-3 text-lg">{icon}</span>
      {label}
    </div>
  );
};

export default Sidebar;
