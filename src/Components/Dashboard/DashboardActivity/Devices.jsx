import React from "react";
import Card from "../Card";
import camera from "../../../assets/images/Ellipse.png";
import { useNavigate } from "react-router-dom";

const Devices = ({
  title,
  textClassName = "",
  image,
  imageClass = "",
  onClick,
  buttonText,
  category,
  categoryClassName = "",
  model,
  modelClassName = "",
  active,
  activeclassName = "",
  className = "",
  cardHeight = "",
}) => {
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate("/device-detail");
  };

  const deviceCard = [
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
      id: 1,
      img: camera,
      title: "Device Name: Sony 224",
      category: "Category: Camera",
      model: "IMEI/MAC: 22-09-08",

      active: "Status:Active",
      buttonText: "View ",
    },
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
    <div className="">
      <p className="text-3xl text-white  sm:mt-0 mt-0 font-bold">My Device</p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 pr-4 sm:pr-8 
       lg:pr-14 xl:pr-14 items-center justify-center py-5 sm:py-5 md:py-5 lg:py-5 xl:py-5"
      >
        {deviceCard.map((card, index) => (
          <Card
            key={index}
            image={card.img}
            className="px-0 "
            imageClass="w-12 h-12"
            title={card.title}
            textClassName=""
            category={card.category}
            categoryClassName=""
            model={card.model}
            modelClassName=""
            active={card.active}
            activeclassName=""
            buttonText={card.buttonText}
            cardHeight="xl:h-[220px] lg:h-[220px] sm:h-[220px] h-[220px]"
            showViewIcon={false}
            onClick={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Devices;
