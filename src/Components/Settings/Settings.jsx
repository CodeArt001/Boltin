import { useState } from "react";
import Dashboardbar from "../Dashboard/Dashboardbar";
import Accountname from "./Accountname";

import Notificationsettings from "./Notificationsettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account-settings");
  return (
    <div className="bg-black  min-h-screen w-full  md:px-10 lg:pl-6 relative">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2">
        <Dashboardbar text="Settings" />
      </div>
      <div className="flex justify-between px-6 text-white cursor-pointer mt-10">
        <div
          onClick={() => setActiveTab("account-settings")}
          className={` ${
            activeTab === "account-settings"
              ? "border-b-2"
              : "border-b-3 border-transparent"
          }`}
        >
          Account settings
        </div>
        <div
          onClick={() => setActiveTab("notification-settings")}
          className={`text-white cursor-pointer ${
            activeTab === "notification-settings"
              ? "border-b-3"
              : "border-b-4 border-transparent"
          }`}
        >
          Notification settings
        </div>
      </div>
      <div>
        {activeTab === "account-settings" && <Accountname />}
        {activeTab === "notification-settings" && <Notificationsettings />}
      </div>
    </div>
  );
};

export default Settings;
