// import React from 'react'
import mark from "../../assets/images/success.png";

const Passwordsuccsseful = ({ text = "Password change successfully" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={mark} alt="" className=" w-[11rem] h-[11rem]" />
      <p className="text-white text-2xl my-2">{text}</p>
    </div>
  );
};

export default Passwordsuccsseful;
