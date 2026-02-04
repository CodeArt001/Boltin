import ViewIcon from "../../../assets/images/viewright.png";
import camera from "../../../assets/images/cam.png";
import { useNavigate } from "react-router-dom";

const Activitycard = () => {
  const navigate = useNavigate();
  const handleActivity = () => {
    navigate("/notifications");
  };
  return (
    <div className="lg:w-[60%]">
      <div className="flex flex-row items-center my-3 justify-between">
        <h1 className="text-black text-2xl font-bold">Recent Activity</h1>
        <div
          onClick={handleActivity}
          className="flex flex-row items-center justify-center gap-3 cursor-pointer"
        >
          <p className="text-black font-bold text-2xl">View all</p>
          <img
            src={ViewIcon}
            alt=""
            className="md:w-4 md:h-4 xl:w-6 xl:h-9 lg:w-9 lg:h-6 text-black"
          />
        </div>
      </div>
      <div className="gap-4 flex flex-col text-white ">
        <div className="flex justify-between items-center bg-white text-black gap-24 px-4 shadow shadow-black/30">
          <div className="flex gap-3 items-center">
            <img src={camera} alt="cam-img" className="sm:w-12 sm:h-12" />

            <p className=" ">Canon 80D marked missing</p>
          </div>
          <div className=" flex flex-col items-center py-2">
            <p>Tue</p>
            <p>9:18pm</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white text-black gap-24 px-4 shadow shadow-black/30">
          <div className="flex gap-3 items-center">
            <img src={camera} alt="cam-img" className="sm:w-12 sm:h-12" />
            <p className="">Canon 80D marked missing</p>
          </div>
          <div className=" flex flex-col items-center py-2">
            <p>Tue</p>
            <p>9:18pm</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white text-black shadow shadow-black/30 gap-24 px-4">
          <div className="flex gap-3 items-center">
            <img src={camera} alt="cam-img" className="sm:w-12 sm:h-12" />
            <p className="">Canon 80D marked missing</p>
          </div>
          <div className=" flex flex-col items-center py-2">
            <p>Tue</p>
            <p>9:18pm</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white text-black shadow shadow-black/30 gap-24 px-4">
          <div className="flex gap-3 items-center">
            <img src={camera} alt="cam-img" className="sm:w-12 sm:h-12" />
            <p className="">Canon 80D marked missing</p>
          </div>
          <div className=" flex flex-col items-center py-2">
            <p>Tue</p>
            <p>9:18pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activitycard;
