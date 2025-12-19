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
    <div className="bg-black xl:pl-6  min-h-screen w-full  lg:pl-6">
      <div className="py-2">
        <Dashboardbar text="Register Device" />
      </div>
      <div className="flex  gap-10 items-center xl:flex-row lg:flex-row flex-col sm:flex-col w ">
        <Registerinfo />
        <Registerupload />
      </div>
      <div className="flex justify-center py-2">
        <button
          onClick={handleRegistersuccessful}
          className="px-15 py-2 bg-[#6C5CE7] text-white text-center rounded-lg mt-10"
        >
          Submit & Register Gadget
        </button>
      </div>
    </div>
  );
};

export default Registerdevice;
