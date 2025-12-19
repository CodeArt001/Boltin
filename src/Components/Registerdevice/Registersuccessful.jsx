// import React from "react";
// import Card from "../Dashboard/Card";
import camera from "../../assets/images/Ellipse.png";
import mark from "../../assets/images/success.png";
import barcode from "../../assets/images/code.png";
import Dashboardbar from "../Dashboard/Dashboardbar";
import chatBox from "../../assets/images/chat.png";
import { useNavigate } from "react-router-dom";

const Registersuccessful = () => {
  const navigate = useNavigate();
  const handleDeviceDetail = () => {
    navigate("/device-detail");
  };
  const successful = [
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
    <div className=" bg-black h-full">
      <Dashboardbar text="Register Device" />
      <div className="flex items-center justify-between ">
        <div></div>
        <div className="flex flex-col justify-center items-center py-10">
          <img src={mark} alt="" className="my-3" />
          <p className="text-white text-2xl my-2">
            Device Successfully Register
          </p>
          {successful.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 border border-white px-5 py-8 rounded-lg justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center text-white">
                <img src={item.img} alt="camera-img" className="w-8 h-8" />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>{item.model}</p>
                <p>{item.active}</p>

                <button
                  onClick={handleDeviceDetail}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded w-full mt-2"
                >
                  {item.buttonText}
                </button>
              </div>
              <img src={barcode} alt="" />
            </div>
          ))}
        </div>
        <div className="relative  top-35 pr-6">
          <img src={chatBox} alt="chat" />
          <p className="text-white">chatBox</p>
        </div>
      </div>
    </div>
  );
};

export default Registersuccessful;
