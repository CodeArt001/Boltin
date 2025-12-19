import React from "react";
import chatBox from "../../../assets/images/chat.png";
import ViewIcon from "../../../assets/images/view.png";
import { useNavigate } from "react-router-dom";

const Actionscard = () => {
  const navigate = useNavigate();
  const handleRegisterDevice = () => {
    navigate("/registerdevice");
  };
  const handleTransferOwnership = () => {
    navigate("/ownership");
  };
  const handleDeclareStolen = () => {
    navigate("/stolen");
  };
  const handleDeclareMissing = () => {
    navigate("/missing");
  };
  const handleTransferHistory = () => {
    navigate("/transfer-history");
  };
  return (
    <div className="w-full xl:mt-3 lg:mt-3  md:mt-0 sm:mt-3 mt-3">
      <p className="text-white text-2xl font-bold">Qick Actions</p>
      <div className="flex flex-row  my-3 gap-4 w-full">
        <div className="gap-3 flex flex-col w-full">
          <button
            onClick={handleRegisterDevice}
            className="px-4 py-6 bg-[#6C5CE7] text-white text-center rounded-lg "
          >
            Register a device
          </button>
          <button
            onClick={handleDeclareMissing}
            className="px-4 py-6 bg-[#6C5CE7] text-white text-center rounded-lg "
          >
            Declare missing
          </button>
          <button
            onClick={handleTransferHistory}
            className="px-4 py-6 bg-[#6C5CE7] text-white text-center rounded-lg "
          >
            Transfer History
          </button>
        </div>
        <div className="gap-3 flex flex-col w-full">
          <button
            onClick={handleTransferOwnership}
            className="px-4 py-6 bg-[#6C5CE7] text-white text-center rounded-lg "
          >
            Transfer Ownership
          </button>
          <button
            onClick={handleDeclareStolen}
            className="px-4 py-6 bg-[#6C5CE7] text-white text-center rounded-lg "
          >
            Declare Stolen
          </button>
          <button className="flex flex-col right-0 -bottom-8 fixed pr-12">
            <img src={chatBox} alt="chatBox-image" />
            <p className="text-white">chatBox</p>
            <div className="flex gap-2">
              <p className="text-white">View all</p>
              <img src={ViewIcon} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actionscard;
