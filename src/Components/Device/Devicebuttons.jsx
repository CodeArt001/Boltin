const Devicebuttons = () => {
  return (
    <div>
      <div>
        <button className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2">
          All Devices{" "}
        </button>
        <button className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2">
          Active Devices
        </button>
        <button className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2">
          Missing Devices
        </button>
        <button className="bg-[#1F7A5A] rounded-lg text-white px-3 py-2">
          Stolen Devices
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Devicebuttons;
