// import React from "react";
// import Dashboardbar from "../Dashboard/DashboardBar";
import chatBox from "../../assets/images/chat.png";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardBar from "../Dashboard/DashboardBar";

const Complete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const deviceId = location.state?.deviceId;
  const handleTransfer = (deviceId) => {
    navigate("/request", { state: { deviceId } });
  };
  return (
    <div className="h-full bg-white text-black dark:bg-black dark:text-white w-full  lg:pl-6 ">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow-md mt-2">
        <DashboardBar
          text="Transfer Ownership"
          textClassName="md:text-[1.9rem]"
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className=" flex flex-col  justify-center items-center py-[25rem] ">
          <div></div>
          <div className="">
            <h1>Input Your Login Password to complete Transfer</h1>

            <div className="flex flex-col gap-2 py-14 ">
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="input password"
                className="border border-black dark:border-white placeholder:text-black dark:placeholder:text-white rounded-2xl pl-3 py-3"
              />
            </div>
            <button
              onClick={() => handleTransfer(deviceId)}
              className="bg-[#6C5CE7] hover:bg-purple-700  px-14 py-2 rounded-2xl w-full mt-2"
            >
              Complete Transfer
            </button>
          </div>
          <div className="absolute bottom-30 right-8 flex flex-col items-center ">
            <img src={chatBox} alt="chat" />
            <p className="">chatBox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
