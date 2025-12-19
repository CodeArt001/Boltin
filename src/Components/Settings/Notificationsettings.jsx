import paulp from "../../assets/images/paul.png";
// import views from "../../assets/images/view.png";
import chatBox from "../../assets/images/chat.png";
import Toggle from "./Toggle";
import { useState } from "react";

const Notificationsettings = () => {
  const [newDevice, setNewDevice] = useState(false);
  const [deviceMarkedMissing, setDeviceMarkedMissing] = useState(false);
  const [transferRequest, setTransferRequest] = useState(false);
  return (
    <div className="bg-black h-full flex flex-col justify-center items-center relative">
      <div></div>
      <div className="py-3">
        <img src={paulp} alt="" />
        <p className="text-white text-center">Paul</p>
      </div>
      <div className="flex flex-col text-white relative items-center ">
        <div className="border border-white rounded-lg  cursor-pointer w-[20rem] pl-3 py-2">
          New device added
        </div>
        <Toggle
          isOn={newDevice}
          onToggle={() => setNewDevice(!newDevice)}
          toggleClassName="absolute right-4 top-3"
        />
      </div>
      <div className="flex flex-col text-white relative items-center">
        <div className="border border-white rounded-lg  cursor-pointer w-[20rem] pl-3 py-2 text-white mt-3">
          Device marked missing/stolen
        </div>
        <Toggle
          isOn={deviceMarkedMissing}
          onToggle={() => setDeviceMarkedMissing(!deviceMarkedMissing)}
          toggleClassName="absolute right-4 top-6"
        />
      </div>
      <div className="flex flex-col text-white relative items-center">
        <div className="border border-white rounded-lg  cursor-pointer w-[20rem] pl-3 py-2 text-white mt-3">
          Device marked missing/stolen
        </div>
        <Toggle
          isOn={transferRequest}
          onToggle={() => setTransferRequest(!transferRequest)}
          toggleClassName="absolute right-4 top-6"
        />
      </div>
      <div className="absolute -bottom-40 right-8 flex flex-col items-center ">
        <img src={chatBox} alt="chat" />
        <p className="text-white">chatBox</p>
      </div>
    </div>
  );
};

export default Notificationsettings;
