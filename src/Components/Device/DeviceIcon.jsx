import { LuListTodo, LuImage } from "react-icons/lu";
// import { useLocation, useNavigate } from "react-router-dom";

const DeviceIcon = ({ viewMode, setViewMode }) => {
  const brandGreen = "#1e6b52";
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const deviceImage = location.pathname === "/device-table";

  //   const handleDeviceTable = () => {
  //     navigate("/device-table");
  //   };
  return (
    <div className="flex gap-4 ">
      <button
        onClick={() => setViewMode("table")}
        className={`p-2 border-2 border-[#94eed2] rounded-lg transition-colors ${viewMode === "table" ? "bg-[#1F7A5A] text-white" : "border border-[#1F7A5A]"}`}
      >
        <LuListTodo
          color={viewMode === "table" ? "white" : brandGreen}
          size={24}
        />
      </button>

      <button
        onClick={() => setViewMode("grid")}
        className={`p-2 rounded-lg transition-colors ${
          viewMode === "grid"
            ? "bg-[#1F7A5A]"
            : "border border-[#1F7A5A] text-[#1F7A5A]"
        }`}
      >
        <LuImage color="white" size={24} />
      </button>
    </div>
  );
};

export default DeviceIcon;
