import Userlogin from "../Auth/Userlogin";
import system from "../../assets/images/authimg.jpg";
import marked from "../../assets/images/mark.png";

const Userr = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen lg:flex-row md:flex-col lg:justify-between flex flex-col">
      <div className="relative">
        <img
          src={system}
          alt=""
          className="opacity-50 w-full lg:h-full lg:w-[55rem] h-[65vh] md:h-[65vh]"
        />
        <div className="">
          <p className="text-black dark:text-white text-5xl absolute lg:top-[10rem] lg:right-[35rem] md:bottom-[40rem] bottom-[23rem] m-4 font-space">
            Boltin
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold font-space text-black dark:text-white lg:w-[35rem] md:w-full lg:px-0 md:px-0 px-5">
              Welcome back to Boltin.
            </h1>
            <p className="text-black dark:text-white text-center text-sm font-inter lg:w-[20rem] lg:px-0 md:px-0 px-5">
              Secure access to your gadgets, tracking dashboard, and ownership
              records.
            </p>
          </div>
          <div className="absolute lg:bottom-45 bottom-10 lg:right-[30rem] flex flex-col md:px-9 lg:px-0 px-6">
            <div className="relative flex items-center gap-3 mt-5">
              <img src={marked} alt="" />
              <p className="text-black dark:text-white">Privacy assured</p>
            </div>
            <div className="relative flex items-center gap-3 mt-5">
              <img src={marked} alt="" />
              <p className="text-black dark:text-white">
                No access to your device data
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mr-14 lg:mt-13 md:mt-0 mt-0 md:px-5 md:mb-6 mb-6 lg:mb-0">
        <Userlogin />
      </div>
    </div>
  );
};

export default Userr;
