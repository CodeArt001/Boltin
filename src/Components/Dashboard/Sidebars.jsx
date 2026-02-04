import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Line from "../paragraphs/line";
import Logout from "../Buttons/Logout";
import menu from "../../assets/images/Menu.png";
import device from "../../assets/images/TV.png";

const Sidebars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/userr");
  };
  const location = useLocation();
  const sideBarMenu = [
    { id: 1, img: menu, name: "Dasboard", to: "/dashboard" },
    { id: 2, img: device, name: "My Devices", to: "/mydevice" },
    { id: 3, img: device, name: "Register Device", to: "/registerdevice" },
    { id: 4, img: device, name: "Declare Missing", to: "/missing" },
    { id: 5, img: device, name: "Declare Stolen", to: "/stolen" },
    { id: 6, img: device, name: "Ownership Transfer", to: "/ownership" },
  ];

  const chatSection = [
    { id: 1, img: device, name: "Profile", to: "/profile" },
    { id: 2, img: device, name: "Transfer History", to: "/transfer-history" },
    { id: 3, img: device, name: "Chatbot", to: "/chat-bot" },
    { id: 4, img: device, name: "Notifications", to: "/notifications" },
    { id: 5, img: device, name: "Settings", to: "/settings" },
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
          className={`border border-white dark:border-gray-800 shadow shadow-black/30 min-h-screen bg-white dark:bg-gray-950 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[280px] xl:w-[280px] h-full px-2 z-40 transition-transform duration-300 flex flex-col pt-0
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
              transition-colors  ${isActive ? "" : "hover:bg-[#6e66ad]"}`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <div className="bg-[#6C5CE7] w-2 h-8 border border-[#6C5CE7] text-white rounded-l-lg"></div>
                      )}

                      <img src={item.img} alt={item.name} className="w-5 h-5" />
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
              transition-colors  ${
                isActive ? "bg-[#6C5CE7]" : "hover:bg-[#6e66ad] "
              }`}
                >
                  <div className="flex items-center gap-3">
                    <img src={items.img} alt={items.name} className="w-5 h-5" />
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
