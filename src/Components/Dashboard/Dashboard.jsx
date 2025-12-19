import Dashboardbar from "./Dashboardbar";
import Overviewcard from "./Overviewcard";

import Activities from "./DashboardActivity/Activities";
import Devices from "./DashboardActivity/Devices";

const Dashboard = () => {
  return (
    <div className=" min-h-screen  bg-black pl-2 sm:pl-20 md:pl-0     lg:pl-6 xl:pl-6">
      <div className=" py-2 sm:py-2 md:py-2 ">
        <Dashboardbar />
      </div>
      <p className="text-white text-3xl px-0 sm:px-0 md:px-6 lg:px-0 xl:px-0  font-bold">
        Device Overview
      </p>
      <Overviewcard />
      <div className="px-0 sm:px-0 md:px-6 lg:px-0 xl:px-0">
        <Activities />

        <Devices />
      </div>
    </div>
  );
};

export default Dashboard;
