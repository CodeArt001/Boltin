import React from "react";
import Registerinfo from "./Registerinfo";
import Dashboardbar from "../Dashboard/Dashboardbar";
import Registerupload from "./Registerupload";
import { useNavigate } from "react-router-dom";

const Registerdevice = () => {
  const navigate = useNavigate();
  const handleRegistersuccessful = () => {
    navigate("/registersuccessful");
  };
  return (
    <div className="bg-white dark:bg-black xl:pl-6  min-h-screen w-full  lg:pl-6">
      <div className="shadow-md mt-2">
        <Dashboardbar text="Register Device" />
      </div>
      <div className="gap-10 items-center xl:flex-row lg:flex-row flex-col sm:flex-col md:px-2 xl:px-0 lg:px-0 lg:w-[50%] place-self-center">
        <Registerinfo />
        <Registerupload />
      </div>
      <div className="flex justify-center py-2">
        <button
          onClick={handleRegistersuccessful}
          className="px-15 py-2 bg-[#1F7A5A] text-white text-center rounded-lg mt-10"
        >
          Submit & Register Gadget
        </button>
      </div>
    </div>
  );
};

export default Registerdevice;
