// import chatBox from "../../../assets/images/chat.png";
import ViewIcon from "../../../assets/images/view.png";
import camera from "../../../assets/images/cam.png";
// import { useNavigate } from "react-router-dom";

const Actionscard = () => {
  // const navigate = useNavigate();
  // const handleRegisterDevice = () => {
  //   navigate("/registerdevice");
  // };
  // const handleTransferOwnership = () => {
  //   navigate("/ownership");
  // };
  // const handleDeclareStolen = () => {
  //   navigate("/stolen");
  // };
  // const handleDeclareMissing = () => {
  //   navigate("/missing");
  // };
  // const handleTransferHistory = () => {
  //   navigate("/transfer-history");
  // };
  return (
    <div className="lg:w-[40%] xl:mt-3 lg:mt-3  md:mt-0 sm:mt-3 mt-3">
      <div className="flex justify-between lg:items-start ">
        <p className="text-black text-2xl font-bold">Alerts</p>
        <div className="flex items-center gap-2">
          <p className="text-black dark:text-white font-bold text-2xl">
            View all
          </p>
          <img
            src={ViewIcon}
            alt=""
            className="md:w-4 md:h-4 xl:w-6 xl:h-9 lg:w-9 lg:h-6 text-black"
          />
        </div>
      </div>
      <div className="flex xl:flex-col lg:flex-col flex-col gap-3 dark:text-white mt-2">
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
      </div>
    </div>
  );
};

export default Actionscard;
