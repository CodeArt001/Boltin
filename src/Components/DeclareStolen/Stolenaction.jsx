import chatBox from "../../assets/images/chat.png";
import camera from "../../assets/images/Ellipse.png";
import mark from "../../assets/images/success.png";
import barcode from "../../assets/images/code.png";
import { useNavigate } from "react-router-dom";
import DashboardBar from "../Dashboard/DashboardBar";

const Stolenaction = () => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate("/device-detail");
  };
  const stolenAction = [
    {
      id: 1,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status:Active",
      buttonText: "View ",
    },
  ];
  return (
    <div className=" bg-white text-black dark:text-white dark:bg-black w-full lg:pl-6 ">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow-md mt-2">
        <DashboardBar text="Declare Stolen" />
      </div>
      <div className="lg:flex xl:flex items-center justify-between flex-col sm:flex-col md:flex">
        <div></div>
        <div className="flex flex-col justify-center items-center py-10">
          <img src={mark} alt="" className="my-3" />
          <p className=" text-2xl my-2">Action Successful</p>
          {stolenAction.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 border border-black dark:border-white px-5 py-8 rounded-lg justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center">
                <img src={item.img} alt="camera-img" className="w-8 h-8" />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>{item.model}</p>
                <p>{item.active}</p>

                <button
                  onClick={handleViewDetails}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded w-full mt-2"
                >
                  {item.buttonText}
                </button>
              </div>
              <img src={barcode} alt="" />
            </div>
          ))}
        </div>
        <div className="fixed  top-35 right-0 pr-6">
          <img src={chatBox} alt="chat" />
          <p className="">chatBox</p>
        </div>
      </div>
    </div>
  );
};

export default Stolenaction;
