import Activities from "./DashboardActivity/Activities";
import Devicetable from "./Devicetable";
// import DashboardBar from "./DashboardBar";
import OverviewCardd from "./DashboardActivity/OverviewCardd";
import DashboardBar from "./DashboardBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col w-full lg:mt-6 mt-[1.6rem] dark:text-white lg:pl-6">
      <div className="shadow-md -mt-4">
        <DashboardBar />
      </div>
      <div className="md:mt-10 mt-0 lg:mt-0">
        <OverviewCardd />
      </div>
      <div className="lg:px-6 px-0">
        <Devicetable />
      </div>
      <div className="px-2 sm:px-0 md:px-6 lg:px-0 xl:px-0">
        <Activities />
      </div>
    </div>
  );
};

export default Dashboard;
