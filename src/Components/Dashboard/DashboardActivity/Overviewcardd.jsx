import Devicecard from "../Devicecard";

const OverviewCardd = () => {
  const deviceStats = [
    { title: "Total Device", count: 30, barColor: "bg-blue-600" },
    { title: "Active Device", count: 25, barColor: "bg-green-600" },
    { title: "Missing Device", count: 3, barColor: "bg-yellow-500" },
    { title: "Stolen Device", count: 2, barColor: "bg-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 xl:gap-8 p-6 ">
      {deviceStats.map((stat, index) => (
        <Devicecard
          key={index}
          title={stat.title}
          count={stat.count}
          barColor={stat.barColor}
        />
      ))}
    </div>
  );
};

export default OverviewCardd;
