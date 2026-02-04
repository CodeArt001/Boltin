import device from "../../assets/images/report.png";
import tele from "../../assets/images/TV.png";
import sect from "../../assets/images/connect.png";
import Menu from "../../assets/images/bmenu.png";
import ai from "../../assets/images/Ai.png";

const Featurecard = () => {
  const Featurecards = [
    {
      img: tele,
      title: "Register All Your Devices",
      text: "Add cameras, lenses, drones, laptops, lights, and accessories with serial numbers, photos, and documents.",
    },
    {
      img: device,
      title: "Report Missing or Stolen Devices",
      text: "Instantly mark a device as missing/stolen and enable real-time monitoring and alerts.",
    },
    {
      img: sect,
      title: "Ownership Transfer",
      text: "Send or receive devices securely with verified ownership transfer — perfect for teams and studios.",
    },
    {
      img: Menu,
      title: "Smart Dashboard",
      text: "Centralized view of all your equipment, statuses, warranties, notifications, and more.",
    },
    {
      img: ai,
      title: "AI Chat Assistant",
      text: "Search, troubleshoot, and manage devices using a built-in assistant.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mb-8">
      {Featurecards.map((items) => (
        <div key={items} className="">
          <div className="bg-white  rounded-lg justify-center items-center flex flex-col px-4 py-6 m-4 text-center shadow h-full dark:bg-black dark:text-white">
            <img src={items.img} alt={items.title} className="dark:invert" />
            <p className="py-2 font-bold">{items.title}</p>
            <p className="text-sm">{items.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featurecard;
