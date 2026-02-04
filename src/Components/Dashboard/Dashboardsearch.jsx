import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/images/search.png";

const Dashboardsearch = ({ placeholder = "Search", Image, className }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/mydevice");
    }
  };
  return (
    <div>
      <div className={`flex items-center relative bg-white  ${className}`}>
        <div className="absolute left-3 sm:left-3 md:left-3 lg:left-3 xl:left-3 top-1/2 transform -translate-y-1/2 ">
          {Image && (
            <img
              src={searchIcon}
              alt="search icon"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5"
            />
          )}
        </div>
        <input
          onKeyDown={handleSearch}
          type="text"
          placeholder={placeholder}
          className="border py-2 sm:py-2  md:py-2 lg:py-2 xl:py-2 rounded-lg border-white placeholder:text-black placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-base xl:placeholder:text-base bg-white shadow shadow-black/30 text-white w-full sm:w-56 md:w-80 lg:w-96 xl:w-96 pl-8  sm:pl-9 md:pl-10 lg:pl-10 xl:pl-10 text-sm sm:text-base md:text-base lg:text-base xl:text-base    "
        />
      </div>
    </div>
  );
};

export default Dashboardsearch;
