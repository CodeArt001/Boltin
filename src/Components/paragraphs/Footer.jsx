import { useNavigate } from "react-router-dom";
import Line from "./line";

const Footer = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/userr");
  };
  return (
    <div>
      <Line />
      <div className="bg-white  dark:bg-black dark:text-white text-black py-8 flex flex-col  items-center justify-center text-center">
        <div className="container mx-auto px-4 ">
          Protect Your Gear. Stay Organized. Work With Confidence.
        </div>
        <button
          onClick={handleRegister}
          className="bg-[#1F7A5A] rounded-lg text-white px-5 py-2 mt-4"
        >
          Get Started
        </button>
      </div>
      <Line />
      <p className="text-center">© 2024 Boltin. All rights reserved</p>
    </div>
  );
};

export default Footer;
