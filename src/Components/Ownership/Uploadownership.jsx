import { useEffect, useState } from "react";
import Dashboardbar from "../Dashboard/Dashboardbar";
import camera from "../../assets/images/Ellipse.png";
import Upload from "../Registerdevice/Upload";
import { useNavigate } from "react-router-dom";

const Uploadownership = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  useEffect(() => {
    setSelectedDevice(uploadMissing[0]);
  }, []);
  const navigate = useNavigate();
  const handleDeclareOwner = (deviceId) => {
    navigate("/complete", { state: { deviceId } });
  };
  const uploadMissing = [
    {
      id: 1,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
    },
  ];
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white h-full w-full lg:pl-6">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow-md mt-2">
        <Dashboardbar
          text="Transfer Onwership"
          textClassName="md:text-[1.8rem]"
        />
      </div>
      <div className="lg:w-[35%] sm:w-full w-full lg:mt-10 mt-3 flex flex-col place-self-center py-5 md:mt-13 md:px-3">
        <div className="border border-black dark:border-white px-6 py-10 text-black dark:text-white rounded-2xl ">
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

        <div className="flex flex-col gap-2  py-2">
          <label htmlFor="">Current Owner</label>
          <input
            type="text"
            placeholder="paul"
            className="placeholder:text-black border border-black dark:placeholder:text-white dark:border-white rounded-2xl py-2 pl-2"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="">New Owner Id</label>
          <input
            type="text"
            placeholder="enter new owner user id"
            className="placeholder:text-black border border-black dark:placeholder:text-white dark:border-white rounded-2xl py-2 pl-2"
          />
        </div>
        <div className="flex flex-col gap-2  py-2">
          <label htmlFor="">Reason for Transfer</label>
          <input
            type="text"
            placeholder="enter reason "
            className="placeholder:text-black border border-black dark:placeholder:text-white dark:border-white py-2 pl-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor=""> Transfer Date</label>
          <input
            type="text"
            placeholder="enter date "
            className="placeholder:text-black border border-black dark:placeholder:text-white dark:border-white py-2 pl-2 border rounded-lg"
          />
        </div>
        <Upload text="Upload Supporting Doc (Optional)" uploadwidth="full" />
        <button
          onClick={() => handleDeclareOwner(selectedDevice)}
          disabled={!selectedDevice}
          className="bg-purple-600 hover:bg-purple-700 text-white px-14 py-2 rounded-2xl   mt-2 "
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Uploadownership;
