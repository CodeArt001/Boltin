import Dashboardbar from "./Dashboardbar";
// import Overviewcard from "./Overviewcard";
import Activities from "./DashboardActivity/Activities";
import Overviewcardd from "./DashboardActivity/Overviewcardd";
import Devicetable from "./Devicetable";
// import Devices from "./DashboardActivity/Devices";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col w-full lg:mt-[1.5rem] mt-[1.6rem] dark:text-white lg:pl-6">
      <div className="shadow-md -mt-4">
        <Dashboardbar />
      </div>
      <div className="md:mt-10 mt-0 lg:mt-0">
        <Overviewcardd />
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
