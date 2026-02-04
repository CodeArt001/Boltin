// import React from "react";

const Protect = ({ text = "Protect Your Gear. Protect Your Work." }) => {
  return (
    <div>
      {" "}
      <div className="relative flex items-center justify-center w-full  ">
        <div className="absolute w-full h-0.5 bg-white opacity-70"></div>

        <div className="relative font-space bg-white text-black px-8 py-3 rounded-full font-semibold lg:text-3xl text-[1rem] shadow-md">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Protect;
