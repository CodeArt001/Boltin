import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({
  registerClassName = "bg-black text-white border border-black",
}) => {
  const naviagte = useNavigate();
  const handleRegisterAccount = () => {
    naviagte("/users");
  };
  return (
    <div
      onClick={handleRegisterAccount}
      className={`lg:px-5 px-3 py-1.5 rounded-lg font-inter   ${registerClassName} `}
    >
      <button>Register Gadget</button>
    </div>
  );
};
export default Register;
