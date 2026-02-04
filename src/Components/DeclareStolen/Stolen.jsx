import Dashboardbar from "../Dashboard/Dashboardbar";
import camera from "../../assets/images/Ellipse.png";
import chatBox from "../../assets/images/chat.png";
import { useNavigate } from "react-router-dom";

const Stolen = () => {
  const navigate = useNavigate();
  const handleCardClick = (deviceId) => {
    navigate("/stolen-upload", { state: { deviceId } });
  };
  const stolenCards = [
    {
      id: 1,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 2,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 3,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 3,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 5,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status: Active",
      buttonText: "View ",
    },
  ];
  return (
    <div className="bg-white text-black  dark:bg-black dark:text-white min-h-screen w-full  lg:pl-6 relative">
      <div className="shadow shadow-black/30 mt-2">
        <Dashboardbar text="Declare Stolen" />
      </div>
      <h1 className=" py-4 text-3xl font-bold">Select Device to continue</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 lg:pr-14 xl:pr-14 items-center justify-center py-5 relative">
        {stolenCards.map((cardds, index) => (
          <div key={index} onClick={() => handleCardClick(cardds.id)}>
            <div className="shadow shadow-black/30 cursor-pointer flex flex-col items-center justify-center border border-white rounded-2xl px-4 py-8 ">
              <img src={cardds.img} alt="camera-img" className="w-8 h-8" />
              <p>{cardds.title}</p>
              <p>{cardds.category}</p>
              <p>{cardds.model}</p>
              <p>{cardds.active}</p>

              <button className="bg-[#1F7A5A] hover:bg-[#1F7A5A]/80 text-white px-14 py-2 rounded mt-2">
                {cardds.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed -bottom-9 pr-14 right-0">
        <img src={chatBox} alt="chat" />
        <p className="text-white">chatBox</p>
      </div>
    </div>
  );
};

export default Stolen;
