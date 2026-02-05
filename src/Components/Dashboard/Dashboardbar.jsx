import Dashboardsearch from "./Dashboardsearch";
import notifyIcon from "../../assets/images/notification (2).png";
import { useNavigate } from "react-router-dom";

const DashboardBar = ({ text = "Dashboard", textClassName }) => {
  const navigate = useNavigate();
  const handleNotifcation = () => {
    navigate("/notifications");
  };
  const handleAddNewDevice = () => {
    navigate("/registerdevice");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between xl:items-center lg:items-center rounded-lg bg-white shadow-md px-3 sm:px-4 lg:px-6 xl:px-6 pb-2 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 py-4 lg:py-6">
      <p
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-black dark:text-black font-bold font-space  ${
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
        <div className="flex justify-between items-center gap-5 text-black">
          <button
            onClick={handleAddNewDevice}
            className="bg-[#6C5CE7] px-3 py-2 rounded-lg text-white text-sm"
          >
            Add New Device
          </button>
          <img
            onClick={handleNotifcation}
            src={notifyIcon}
            alt="notification icon"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBar;
