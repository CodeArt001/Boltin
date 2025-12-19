// import React from "react";
import Dashboardsearch from "./Dashboardsearch";
import notifyIcon from "../../assets/images/notification.png";
import profileIcon from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

const Dashboardbar = ({ text = "Dashboard", textClassName }) => {
  const navigate = useNavigate();

  const handleNotifcation = () => {
    navigate("/notifications");
  };
  const handleProfileClick = () => {
    navigate("/profile-info/edit");
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between  xl:items-center lg:items-center rounded-lg  px-3 sm:px-4  lg:px-6 xl:px-6 py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 bg-[#18181b] border border-white gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8">
      <p
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-white font-bold ${
          textClassName || "text-xl"
        }`}
      >
        {text}
      </p>

      <div className="flex justify-between items-center gap-4 sm:gap-6 md:gap-9 lg:gap-10 xl:gap-10 pr-0 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-8 w-full sm:w-auto">
        <Dashboardsearch
          Image={true}
          className="gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5"
        />
        <div className="flex justify-between items-center gap-5">
          <img
            onClick={handleNotifcation}
            src={notifyIcon}
            alt="notification icon"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 cursor-pointer"
          />
          <img
            onClick={handleProfileClick}
            src={profileIcon}
            alt="profile icon"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboardbar;
