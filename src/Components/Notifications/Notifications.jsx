import Notificationactivity from "./Notificationactivity";
import Securitylogins from "./Securitylogins";
import Ownershiptf from "./Ownershiptf";
import { useState } from "react";
import DashboardBar from "../Dashboard/DashboardBar";
// import Dashboardbar from "../Dashboard/DashboardBar";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("activity");
  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white min-h-screen w-full  lg:pl-6">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow-md mt-2">
        <DashboardBar text="Notifications" />
      </div>
      <div className=" flex flex-row gap-3 justify-between lg:pr-14 xl:pr-14 pr-0 sm:pr-0 lg:px-0 xl:px-0 px-3 py-5 md:mt-13">
        <div
          onClick={() => setActiveTab("activity")}
          className={` xl:text-2xl lg:text-2xl sm:text-sm text-sm cursor-pointer ${
            activeTab === "activity"
              ? "border-b-2 border-gray-500"
              : "border-b-4 border-transparent"
          }`}
        >
          Device Activity
        </div>

        <div
          onClick={() => setActiveTab("security")}
          className={` xl:text-2xl lg:text-2xl sm:text-sm text-sm  cursor-pointer ${
            activeTab === "security"
              ? "border-b-2 border-gray-500 "
              : "border-b-4 border-transparent"
          }`}
        >
          Security
        </div>
        <div
          onClick={() => setActiveTab("ownership")}
          className={` xl:text-2xl lg:text-2xl sm:text-sm text-sm px-3 sm:px-3 lg:px-0 xl:px-0 cursor-pointer ${
            activeTab === "ownership"
              ? "border-b-2 border-gray-500"
              : "border-b-4 border-transparent"
          }`}
        >
          Ownership Transfer
        </div>
      </div>
      <div className="">
        {activeTab === "activity" && <Notificationactivity />}
        {activeTab === "security" && <Securitylogins />}
        {activeTab === "ownership" && <Ownershiptf />}
      </div>
    </div>
  );
};

export default Notifications;
