import { useState } from "react";
// import Dashboardbar from "../Dashboard/DashboardBar";
import Accountsecurity from "../Settings/Accountsecurity";
import Editprofile from "../Settings/Editprofile";
import Profilechanges from "./Profilechanges";
import { useLocation } from "react-router-dom";
import DashboardBar from "../Dashboard/DashboardBar";

const Profileinfo = () => {
  const location = useLocation();
  const isEditing = location.pathname.endsWith("/profile-info/edit");
  const incomingTab = location.state?.activeTab;
  const [activeTab, setActiveTab] = useState(
    incomingTab || "personal-information",
  );

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen w-full">
      <div>
        <div className="shadow-md mt-2">
          <DashboardBar text="Profile" />
        </div>
      </div>
      <div className="flex justify-between mt-4 md:mt-16 items-center px-3">
        <div
          onClick={() => setActiveTab("personal-information")}
          className={`cursor-pointer pl-0 sm:pl-0 xl:pl-4 lg:pl-4 md:pl-0 ${
            activeTab === "personal-information"
              ? "border-b-3 border-gray-500"
              : "border-b-transparent"
          }`}
        >
          Personal information
        </div>
        <div
          onClick={() => setActiveTab("account-settings")}
          className={`cursor-pointer pr-0 ${
            activeTab === "account-settings"
              ? "border-b-3 border-gray-500   "
              : "border-b-transparent"
          }`}
        >
          Account settings
        </div>
      </div>
      <div className="py-5">
        {activeTab === "personal-information" &&
          (isEditing ? <Editprofile /> : <Profilechanges />)}
        {activeTab === "account-settings" && <Accountsecurity />}
      </div>
    </div>
  );
};

export default Profileinfo;
