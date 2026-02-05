import dash from "../../assets/images/Dashboard (2) 1.png";
import image from "../../assets/images/man.png";
import canon1 from "../../assets/images/canon.png";

const Homesection = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5">
      <div className="relative">
        <div className=" relative">
          <div className="bg-[#CDE4DA] lg:h-[600px] rounded-lg shadow-md shadow-black/30">
            <div className="flex items-center justify-center py-4">
              <img src={dash} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className=" lg:w-md lg:h-80 absolute z-40 -ml-28 lg:-top-40 -top-20"
          />
        </div>
        <div className="bg-[#CDE4DA] rounded-lg shadow-md shadow-black/30 text-center mt-6 py-3 mb-8 dark:text-black">
          <h1 className="text-[1.2rem]">
            Photography gear is expensive — losing track of it shouldn’t be
            easy.
          </h1>
          <p>
            Many photographers rely on spreadsheets, memory, or scattered notes
            to manage devices. When something goes missing, there’s no clear
            record of ownership, history, or location.
          </p>
        </div>
      </div>
      <div className="absolute lg:right-28 -right-2 lg:top-200  top-224">
        <img src={canon1} alt="" />
      </div>
    </div>
  );
};

export default Homesection;
