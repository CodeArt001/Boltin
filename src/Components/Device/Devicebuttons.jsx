import { useLocation, useNavigate } from "react-router-dom";
import DeviceIcon from "./DeviceIcon";

const DeviceButtons = ({ viewMode, setViewMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAllDevicesActive = location.pathname === "/mydevice";
  const activeDevice = location.pathname === "/active-device";
  const missingDevice = location.pathname === "/missing-device";
  const stolenDevice = location.pathname === "/stolen-device";

  const handleAllDevice = ({}) => {
    navigate("/mydevice");
  };
  const handleActiveDevice = () => {
    navigate("/active-device");
  };
  const handleMissingDevice = () => {
    navigate("/missing-device");
  };
  const handleStolenDevice = () => {
    navigate("/stolen-device");
  };
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-4">
        <button
          onClick={handleAllDevice}
          className={`border-2 rounded-lg px-3 py-1 transition-colors ${
            isAllDevicesActive
              ? "bg-[#1F7A5A] text-white border-[#1F7A5A]"
              : "bg-white text-black border-[#CDE4DA]"
          }`}
        >
          All Devices
        </button>
        <button
          onClick={handleActiveDevice}
          className={`border-2 rounded-lg px-3 py-1 transition-colors ${
            activeDevice
              ? "bg-[#1F7A5A] text-white border-[#1F7A5A]"
              : "bg-white text-black border-[#CDE4DA]"
          }`}
        >
          Active Devices
        </button>
        <button
          onClick={handleMissingDevice}
          className={`border-2 rounded-lg px-3 py-1 transition-colors ${
            missingDevice
              ? "bg-[#1F7A5A] text-white border-[#1F7A5A]"
              : "bg-white text-black border-[#CDE4DA]"
          }`}
        >
          Missing Devices
        </button>
        <button
          onClick={handleStolenDevice}
          className={`border-2 rounded-lg px-3 py-1 transition-colors ${
            stolenDevice
              ? "bg-[#1F7A5A] text-white border-[#1F7A5A]"
              : "bg-white text-black border-[#CDE4DA]"
          }`}
        >
          Stolen Devices
        </button>
      </div>
      <DeviceIcon viewMode={viewMode} setViewMode={setViewMode} />
    </div>
  );
};

export default DeviceButtons;
