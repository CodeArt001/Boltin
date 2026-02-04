import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Line from "../paragraphs/Line";
import Logout from "../Buttons/Logout";
import { MdGridView } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { TbDeviceDesktopPlus } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";
import { LuOctagonX } from "react-icons/lu";
import { LuArrowLeftRight } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { LuHistory } from "react-icons/lu";
import { LuBot } from "react-icons/lu";
import { LuBellDot, LuSettings } from "react-icons/lu";

const Sidebars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/userr");
  };
  const location = useLocation();
  const sideBarMenu = [
    { id: 1, icon: <MdGridView />, name: "Dashboard", to: "/dashboard" },
    {
      id: 2,
      icon: <MdOutlineDevices />,
      name: "My Devices",
      to: "/mydevice",
    },
    {
      id: 3,
      icon: <TbDeviceDesktopPlus />,
      name: "Register Device",
      to: "/registerdevice",
    },
    {
      id: 4,
      icon: <FiAlertTriangle />,
      name: "Declare Missing",
      to: "/missing",
    },
    { id: 5, icon: <LuOctagonX />, name: "Declare Stolen", to: "/stolen" },
    {
      id: 6,
      icon: <LuArrowLeftRight />,
      name: "Ownership Transfer",
      to: "/ownership",
    },
  ];

  const chatSection = [
    { id: 1, icon: <CgProfile />, name: "Profile", to: "profile-info/edit" },
    {
      id: 2,
      icon: <LuHistory />,
      name: "Transfer History",
      to: "/transfer-history",
    },
    { id: 3, icon: <LuBot />, name: "Chatbot", to: "/chat-bot" },
    { id: 4, icon: <LuBellDot />, name: "Notifications", to: "/notifications" },
    { id: 5, icon: <LuSettings />, name: "Settings", to: "/settings" },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden absolute right-3 top-3 md:top-20 md:right-0 md:mr-[1rem] z-50 p-2 bg-[#6C5CE7] text-black rounded-md shadow-lg "
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black  bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}
      <aside
        className={`bg-white dark:bg-black fixed lg:static top-0 left-0 min-h-screen z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } `}
      >
        <div
          className={`border border-white dark:border-gray-800 shadow shadow-black/30 min-h-screen bg-white dark:bg-gray-950 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[300px] xl:w-[305px] h-full px-2 z-40 transition-transform duration-300 flex flex-col pt-0
           `}
        >
          <div className="">
            <h1 className="text-black dark:text-white text-5xl px-3 py-14 font-space">
              Boltin
            </h1>

            <Line lineClassName="bg-black dark:bg-white" />
            <div className="py-8  sm:py-28 md:py-30 lg:py-20 xl:py-23">
              {sideBarMenu.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={` block px-3 xl:py-4 lg:py-4 md:py-4 py-2 font-space  rounded-lg mb-2  text-black dark:text-white text-[1.4rem] xl:text-2xl lg:text-2xl
              transition-colors  ${isActive ? "" : "hover:bg-[#b6cfc7] hover:text-white"}`}
                  >
                    <div className="flex items-center gap-3 hover:text-[#1F7A5A] ">
                      {isActive && (
                        <div className="bg-[#1F7A5A] w-2 h-8 border border-[#1F7A5A] text-white rounded-l-lg"></div>
                      )}
                      <div>{item.icon}</div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <Line lineClassName="bg-black dark:bg-white" />
          </div>
          <div className="xl:py-10 lg:py-14 md:py-3 sm:py-16 py-3 xl:mt-5">
            {chatSection.map((items) => {
              const isActive = location.pathname === items.to;
              return (
                <Link
                  key={items.id}
                  to={items.to}
                  className={`block px-3 py-2 font-space rounded-lg mb-2 text-black dark:text-white  text-[1.4rem] xl:text-2xl lg:text-2xl
              transition-colors  ${isActive ? "bg-[#b6cfc7]" : ""}`}
                >
                  <div className="flex items-center gap-3 text-[#1F7A5A] ">
                    <div>{items.icon}</div>
                    <div />
                    {items.name}
                  </div>
                </Link>
              );
            })}
            <div
              onClick={handleLogout}
              className="mt-2 md:mt-8 xl:mt-13 lg:mt-13"
            >
              <Logout />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebars;
