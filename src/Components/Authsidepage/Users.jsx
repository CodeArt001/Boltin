import system from "../../assets/images/authimg.jpg";
import marked from "../../assets/images/mark.png";
import Usercreate from "../Auth/Usercreate";

const User = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white flex lg:flex-row md:flex-col flex-col lg:justify-between  ">
      <div className="relative">
        <img
          src={system}
          alt=""
          className="opacity-50 w-full   lg:h-full lg:w-[55rem] h-[65vh] md:h-[65vh]"
        />
        <div className="">
          <p className=" text-5xl absolute lg:top-[10rem] lg:right-[35rem] md:bottom-[40rem] bottom-[22rem]  m-4">
            Boltin
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold  font-space  lg:w-[35rem] md:w-full lg:px-0 md:px-0 px-5  ">
              Create your secure Boltin account
            </h1>
            <p className=" text-center font-inter text-sm w-[20rem]">
              Join thousands of photographers protecting their cameras, lenses,
              laptops, and creative tools with Boltin.
            </p>
          </div>
          <div className="absolute lg:bottom-45 bottom-10 lg:right-[30rem] md:px-9 lg:px-0 px-6 flex flex-col">
            <div className="relative flex items-center gap-3 mt-5">
              <img src={marked} alt="" />
              <p className="">Privacy assured</p>
            </div>
            <div className="relative flex items-center gap-3 mt-5">
              <img src={marked} alt="" />
              <p className="">No access to your device data</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mr-14 lg:mt-13  mt-0  md:px-5  mb-6 lg:mb-0 md:-mt-[8rem]">
        <Usercreate />
      </div>
    </div>
  );
};

export default User;
