import { useState } from "react"; // ✅ Add this import
import Dashboardbar from "../Dashboard/Dashboardbar";
import Card from "../Dashboard/Card";
import camera from "../../assets/images/Ellipse.png";
import camera2 from "../../assets/images/Ellipses.png";
import camera3 from "../../assets/images/Ellipsess.png";
import camera4 from "../../assets/images/Ellipsesss.png";
import chatBox from "../../assets/images/chat.png";
import { useNavigate } from "react-router-dom";
import DeviceButtons from "./Devicebuttons";
import Devicetable from "../Dashboard/Devicetable";

const Mydevice = ({
  title,
  textClassName = "",
  image,
  imageClass = "",
  onClick,
  buttonText,
  category,
  model,
  active,
  className = "",
  cardHeight = "",
}) => {
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const handleViewDevice = (deviceId) => {
    navigate(`/device-detail/${deviceId}`);
  };

  const handleRegisterDevice = () => {
    navigate("/registerdevice");
  };

  const deviceCards = [
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
      img: camera2,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 3,
      img: camera3,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 4,
      img: camera4,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 5,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 6,
      img: camera2,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 7,
      img: camera3,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 8,
      img: camera4,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 9,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 10,
      img: camera2,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 11,
      img: camera3,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 12,
      img: camera4,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 13,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 14,
      img: camera2,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 15,
      img: camera3,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
    {
      id: 16,
      img: camera4,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",
      active: "Status:Active",
      buttonText: "View ",
    },
  ];

  return (
    <div className="min-h-screen w-full lg:pl-6 relative">
      <div className="mt-2 shadow-md">
        <Dashboardbar text="My Device" />
      </div>

      <div className="mt-4">
        <DeviceButtons viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      <div className="mt-5 md:mt-10">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5 lg:pr-14 xl:pr-14 items-center justify-center py-5">
            {deviceCards.map((cards) => (
              <Card
                key={cards.id}
                image={cards.img}
                className="px-0"
                imageClass="w-12 h-12"
                title={cards.title}
                textClassName="font-semibold"
                category={cards.category}
                model={cards.model}
                active={cards.active}
                buttonText={cards.buttonText}
                cardHeight="h-[230px] xl:h-[220px] lg:h-[220px] md:h-[270px]"
                showViewIcon={false}
                onClick={() => handleViewDevice(cards.id)}
              />
            ))}
          </div>
        ) : (
          <Devicetable devices={deviceCards} />
        )}

        <div className="flex justify-center items-center mt-5">
          <button
            onClick={handleRegisterDevice}
            className="px-20 py-2 bg-[#1F7A5A] text-white text-center rounded-lg"
          >
            Next page
          </button>

          <div className="lg:pr-10 xl:pr-10 bottom-10 right-10 flex flex-col items-center z-50 fixed">
            <img src={chatBox} alt="chatBox-image" />
            <p className="text-white">chatBox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mydevice;
