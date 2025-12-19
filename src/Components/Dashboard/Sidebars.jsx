import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Line from "../paragraphs/line";

import Logout from "../Buttons/Logout";

const Sidebars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const sideBarMenu = [
    { id: 1, name: "Dasboard", to: "/dashboard" },
    { id: 2, name: "Devices", to: "/mydevice" },
    { id: 3, name: "Register Device", to: "/registerdevice" },
    { id: 4, name: "Declare Missing", to: "/missing" },
    { id: 5, name: "Declare Stolen", to: "/stolen" },
    { id: 6, name: "Ownership Transfer", to: "/ownership" },
  ];

  const chatSection = [
    { id: 1, name: "Chatbot", to: "/chat-bot" },
    { id: 2, name: "Notifications", to: "/notifications" },
    { id: 3, name: "Settings", to: "/settings" },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden absolute right-2  top-4 md:top-20 md:right-0 md:mr-[1rem] z-50 p-2 bg-[#6C5CE7] text-white rounded-md shadow-lg "
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
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}
      <aside
        className={`bg-black fixed lg:static top-0 left-0 min-h-screen z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } `}
      >
        <div
          className={`border min-h-screen bg-[#18181b] w-[280px] sm:w-[300px] md:w-[320px] lg:w-[17%] xl:w-[100%] h-full px-2 z-40 transition-transform duration-300  
          flex flex-col `}
        >
          <div className="">
            <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl px-3 sm:px-4 md:px-5 lg:px-3 xl:px-3 py-6 sm:py-12 md:py-14 lg:py-12 xl:py-12 ">
              Boltin
            </h1>
            <Line />
            <div className="py-10  sm:py-28 md:py-30 lg:py-20 xl:py-20">
              {sideBarMenu.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={` block px-3 py-2 md:py-3   rounded-lg mb-2  text-white text-[1.4rem] xl:text-2xl lg:text-2xl
              transition-colors  ${
                isActive ? "bg-[#6C5CE7]" : "hover:bg-[#6e66ad] "
              }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <Line />
          </div>
          <div className="xl:py-14 lg:py-14 md:py-3 ">
            {chatSection.map((items) => {
              const isActive = location.pathname === items.to;
              return (
                <Link
                  key={items.id}
                  to={items.to}
                  className={` block px-3 py-2 md:py-2 rounded-lg mb-2  text-white text-[1.4rem]  xl:text-2xl lg:text-2xl
              transition-colors  ${
                isActive ? "bg-[#6C5CE7]" : "hover:bg-[#6e66ad] "
              }`}
                >
                  {items.name}
                </Link>
              );
            })}
            <div className="mt-2 md:mt-8 xl:mt-12 lg:mt-12">
              <Logout />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebars;
