import { useState } from "react";
import Login from "../Buttons/Login";
import Register from "../Buttons/Register";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Features", href: "/" },
    { name: "How it works", href: "/how it works" },
    { name: "Supports", href: "/supports" },
    { name: "FAQs", href: "/faqs" },
  ];
  return (
    <div>
      <div className="flex bg-white justify-between items-center lg:px-20 md:px-5 px-4 py-5 ">
        <p className="text-3xl font-space font-bold">Boltin</p>

        <ul className="hidden lg:flex items-center justify-center lg:gap-6 gap-3 lg:text-2xl text-[1.4rem]  cursor-pointer ">
          {navLinks.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3 items-center text-lg">
          <Login />
          <Register />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-black"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute  left-0 w-[60%] md:w-[50rem] bg-black  text-white border-b rounded-lg shadow-lg z-50 animate-in slide-in-from-top flex md:text-center md:text-center justify-center  ">
          <ul className="flex flex-col p-6 gap-4 md:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="text-xl md:text-2xl font-medium border-b pb-2"
              >
                {link.name}
              </li>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Login loginClassName="border-white text-center" />
              <Register registerClassName="bg-white text-black" />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
