import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Themetoggle from "../Themetoggle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/users");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Features", href: "#our-features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "FAQs", href: "#faqs" },
  ];
  return (
    <>
      <div className="shadow fixed top-0 left-0 w-full z-50 flex bg-white justify-between items-center lg:px-20 md:px-5 px-4 py-5">
        <Link
          to="/"
          className="lg:text-5xl text-4xl font-space font-bold leading-none block"
        >
          Boltin
        </Link>

        <ul className="hidden  lg:flex font-inter items-center justify-center lg:gap-8 gap-3 lg:text-2xl text-[1.4rem]  cursor-pointer ">
          {navLinks.map((link) => (
            <li className="hover:text-gray-600" key={link.name}>
              <li key={link.name}>
                <a href={link.href} className="hover:text-gray-600">
                  {link.name}
                </a>
              </li>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3 items-center ">
          <button
            onClick={handleRegister}
            className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2"
          >
            Get Started
          </button>

          <Themetoggle />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-black z-60 relative"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      {isOpen && (
        <>
          <div className="lg:hidden font-inter fixed top-[80px] left-0 w-[60%] md:w-[100%] bg-black   text-white  border-b rounded-lg shadow-lg z-50 animate-in slide-in-from-top flex md:text-center md:text-center justify-center">
            <ul className="flex flex-col p-6 gap-4 md:gap-6 ">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-gray-600">
                      {link.name}
                    </a>
                  </li>
                </li>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={handleRegister}
                  className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2"
                >
                  Get Started
                </button>
              </div>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
