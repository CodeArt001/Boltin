import { useState } from "react";
import Dashboardbar from "../Dashboard/Dashboardbar";
import Accountname from "./Accountname";

import Notificationsettings from "./Notificationsettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account-settings");
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen w-full  md:px-10 lg:pl-6 relative">
      <div className="mt-2 shadow shadow-black/30">
        <Dashboardbar text="Settings" />
      </div>
      <div className="flex justify-between px-6  cursor-pointer mt-10">
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
          className={` cursor-pointer ${
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
