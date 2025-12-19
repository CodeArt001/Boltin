import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Overviewcard = ({
  buttonClassName = "",
  valueClassName = "",
  textClassName = "",
}) => {
  const navigate = useNavigate();
  const handleViewCard = () => {
    navigate("/mydevice");
  };
  const data = [
    {
      id: 1,
      title: "Total Devices Registered",
      value: "30",
      buttonText: "View ",
    },
    { id: 2, title: "Active Devices", value: "25", buttonText: "View" },
    { id: 3, title: "Missing Devices", value: "3", buttonText: "View" },
    { id: 4, title: "Stolen Devices", value: "2", buttonText: "View" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 px-4 sm:px-8 md:px-12 lg:pr-14 xl:pr-14 lg:pl-0 xl:pl-0 items-center justify-center py-3 sm:py-3 md:py-3 lg:py-0 xl:py-0 xl:mt-7 lg:mt-7 sm:mt-3 mt-3">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          textClassName=" font-semibold text-2xl"
          value={item.value}
          valueClassName="text-3xl "
          buttonText={item.buttonText}
          showViewIcon={true}
          onClick={handleViewCard}
          cardHeight="md:h-[150px]  "
          buttonClassName=" "
        />
      ))}
    </div>
  );
};

export default Overviewcard;
