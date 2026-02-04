import detailcam from "../../assets/images/CAMERA.png";
import EDIT from "../../assets/images/edit.png";
import barcode from "../../assets/images/code.png";
// import { useNavigate, useParams } from "react-router-dom";
import Dashboardbar from "../Dashboard/Dashboardbar";
import Document from "./Document";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Devicedetail = () => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  // const { id } = useParams();
  const navigate = useNavigate();

  const handleRemove = () => {
    setIsRemoveModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsRemoveModalOpen(false);
  };

  const handleDeclareStolen = () => {
    navigate("/stolen");
  };
  const handleDeclareMissing = () => {
    navigate("/missing");
  };

  const handleTransferOwner = () => {
    navigate("/ownership");
  };
  const handlecomfirmRemoval = () => {
    navigate("/mydevice");
  };
  const deviceData = {
    name: "Sony 224",
    category: "Camera",
    serialNumber: "030",
    status: "Active",
    location: "Office",
    lastUpdated: "Wednesday",
    purchaseDate: "22/04/2025",
    addedDate: "21-03-2025",
  };

  return (
    <div className="bg-white text-white dark:bg-black dark:text-white h-full w-full  lg:pl-6">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow shadow-black/30 mt-2">
        <Dashboardbar text={` ${deviceData.name}`} />
      </div>
      <div className="flex items-start justify-between xl:mt-6 lg:mt-6 md:mt-18 mt-6">
        <div></div>

        <div className="flex flex-col items-center justify-center ">
          <img src={detailcam} alt="detailcamera" />
          <h1>Device Name: {deviceData.name} </h1>
          <p>Added: {deviceData.addedDate}</p>
          <div className="flex items-center gap-3">
            <p>Edit details</p>
            <img src={EDIT} alt="" />
          </div>
        </div>
        <div className="lg:pr-14 md:pr-3">
          <button
            onClick={handleRemove}
            className="bg-[#E50914] px-8 py-2  rounded-lg "
          >
            Remove
          </button>
        </div>
      </div>
      <div className="lg:flex xl:flex md:flex-row md:px-3 flex flex-start gap-4 justify-between items-center py-5 text-black dark:text-white">
        <div className=" flex flex-col justify-center items-start">
          <div className="text-xs lg:text-[1rem] md:text-[1rem]">
            <h1>Device Name: {deviceData.category}</h1>
            <p>Serila Number: {deviceData.serialNumber}</p>
            <p>Status: {deviceData.status}</p>
            <p>Last Known Location: {deviceData.location}</p>
            <p>Last Updated: {deviceData.lastUpdated}</p>
            <p>Purchsed on: {deviceData.purchaseDate}</p>
          </div>

          <button
            onClick={handleDeclareStolen}
            className="bg-[#6C5CE7] px-5 py-2 rounded-lg mt-3 text-xs lg:text-[1rem] md:text-[1rem] "
          >
            Declare Stolen
          </button>
        </div>

        <div className="xl:mt-0 lg:mt-0 md:mt-3 mt-3 text-black dark:text-white">
          <h1>Device Name: {deviceData.category}</h1>
          <p>Serila Number: {deviceData.serialNumber}</p>
          <p>Status: {deviceData.status}</p>
          <p>Last Known Location: {deviceData.location}</p>
          <p>Last Updated: {deviceData.lastUpdated}</p>
          <p>Purchsed on: {deviceData.purchaseDate}</p>
          <button
            onClick={handleDeclareMissing}
            className="bg-[#6C5CE7] px-5 py-2 rounded-lg mt-6"
          >
            Declare Missing
          </button>
        </div>
        <div onClick={handleTransferOwner} className="flex flex-col ">
          <img src={barcode} alt="" />
          <button className="bg-[#6C5CE7] px-4 py-2 rounded-lg mt-3 ">
            Transfer Owner
          </button>
        </div>
      </div>
      <div className="py-3">
        <Document />
      </div>
      {isRemoveModalOpen && (
        <Modal onClose={handleCloseModal} onConfirm={handlecomfirmRemoval} />
      )}
    </div>
  );
};

export default Devicedetail;
