const Devicetable = () => {
  const devices = [
    {
      serialNo: "001SN",
      device: "Sony 124",
      category: "Camera",
      status: "Active",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "007SN",
      device: "Mable",
      category: "Drone",
      status: "Active",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "005SN",
      device: "Canon",
      category: "Camera",
      status: "Active",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "004SN",
      device: "Canon",
      category: "Camera",
      status: "Active",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "006SN",
      device: "Son224",
      category: "Camera",
      status: "Stolen",
      location: "Nil",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "003SN",
      device: "Macbook",
      category: "Laptop",
      status: "Stolen",
      location: "Nil",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "009SN",
      device: "Acer",
      category: "Drone",
      status: "Stolen",
      location: "Nil",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "008SN",
      device: "Drone22",
      category: "Drone",
      status: "Missing",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "008SN",
      device: "Drone22",
      category: "Drone",
      status: "Missing",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "008SN",
      device: "Drone22",
      category: "Drone",
      status: "Missing",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
    {
      serialNo: "008SN",
      device: "Drone22",
      category: "Drone",
      status: "Missing",
      location: "Office",
      lastUpdated: "22-04-2024",
    },
  ];
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600";
      case "stolen":
        return "text-red-600";
      case "missing":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };
  return (
    <div className="">
      {/* Header */}
      <div className=" py-3 ">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Devices</h2>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto w-full overflow-hidden border-2 border-blue-400 rounded-lg bg-white shadow shadow-black/30">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Serial No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Devices
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {devices.map((device, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-700">
                  {device.serialNo}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {device.device}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {device.category}
                </td>
                <td
                  className={`px-4 py-3 text-sm font-semibold ${getStatusColor(device.status)}`}
                >
                  {device.status}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {device.location}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {device.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {devices.map((device, index) => (
          <div
            key={index}
            className="border-b border-gray-200 p-4 hover:bg-gray-50"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500 font-semibold">
                  Serial No.
                </p>
                <p className="text-sm text-gray-700">{device.serialNo}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Device</p>
                <p className="text-sm text-gray-700">{device.device}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Category</p>
                <p className="text-sm text-gray-700">{device.category}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Status</p>
                <p
                  className={`text-sm font-semibold ${getStatusColor(device.status)}`}
                >
                  {device.status}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Location</p>
                <p className="text-sm text-gray-700">{device.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">
                  Last Updated
                </p>
                <p className="text-sm text-gray-700">{device.lastUpdated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devicetable;
