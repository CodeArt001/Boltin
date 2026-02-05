import { useEffect, useMemo, useState } from "react";
// import Dashboardbar from "../Dashboard/DashboardBar";
import camera from "../../assets/images/Ellipse.png";
import Upload from "../Registerdevice/Upload";
import { useNavigate } from "react-router-dom";
import DashboardBar from "../Dashboard/DashboardBar";

const Missingupload = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  useEffect(() => {
    setSelectedDevice(uploadMissing[0]);
  }, [uploadMissing]);
  const navigate = useNavigate();
  const handleDeclareMissing = (deviceId) => {
    navigate("/missing-action", { state: { deviceId } });
  };
  const uploadMissing = useMemo(
    () => [
      {
        id: 1,
        img: camera,
        title: "Device Name: Sony 224",
        category: "Category: Camera",
        model: "IMEI/MAC: 22-09-08",
        active: "Status: Active",
      },
    ],
    [],
  );
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white h-full w-full lg:pl-6">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow-md mt-2">
        <DashboardBar text="Declare Missing" />
      </div>
      <div className="lg:w-[35%] sm:w-full w-full mt-10 md:mt-17 md:px-3 flex flex-col place-self-center">
        <div className="border border-black dark:border-white px-6 py-10  rounded-2xl ">
          {uploadMissing.map((mis, index) => (
            <div
              onClick={() => setSelectedDevice(mis)}
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img src={mis.img} alt="came-img" />
              <p>{mis.title}</p>
              <p>{mis.category}</p>
              <p>{mis.model}</p>
              <p>{mis.active}</p>
            </div>
          ))}
        </div>
        <p>Type of Report</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-white">
            Select type of report
          </label>
          <select
            name=""
            id=""
            className="border border-black dark:border-white rounded-2xl py-2 pl-2 "
          >
            <option value="" className=" bg-black ">
              missing
            </option>
            <option value="" className="text-white bg-black">
              stolen
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2  py-2">
          <label htmlFor="">Last Seen Location:</label>
          <input
            type="text"
            placeholder="enter last seen location"
            className="placeholder:text-black placeholder:dark:text-white border border-black dark:border-white rounded-2xl py-2 pl-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Last Seen Location:</label>
          <input
            type="text"
            placeholder="enter last seen location"
            className="placeholder:text-white placeholder:dark:text-black border border-black dark:border-white rounded-2xl py-2 pl-2"
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="">Last Seen Location:</label>
          <input
            type="text"
            placeholder="enter last seen location "
            className="placeholder:text-white placeholder:dark:text-black border border-black dark:border-white  py-2 pl-2  rounded-lg"
          />
        </div>
        <Upload text="Upload Evidence (Optional)" uploadwidth="full" />
        <button
          onClick={() => handleDeclareMissing(selectedDevice)}
          disabled={!selectedDevice}
          className="bg-purple-600 hover:bg-purple-700 px-14 py-2 rounded-2xl   mt-2 "
        >
          Declare Missing
        </button>
      </div>
    </div>
  );
};

export default Missingupload;
