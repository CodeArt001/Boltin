import { useState } from "react";
import Dashboardbar from "../Dashboard/Dashboardbar";
import Accountsecurity from "../Settings/Accountsecurity";
import Editprofile from "../Settings/Editprofile";
import Profilechanges from "./Profilechanges";
import { useLocation } from "react-router-dom";

const Profileinfo = () => {
  const location = useLocation();
  const isEditing = location.pathname.endsWith("/profile-info/edit");
  const incomingTab = location.state?.activeTab;
  const [activeTab, setActiveTab] = useState(
    incomingTab || "personal-information"
  );

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div>
        <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 w-full  pr-0 sm:pr-0 lg:pl-6 xl:pl-6">
          <Dashboardbar text="Profile" />
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
