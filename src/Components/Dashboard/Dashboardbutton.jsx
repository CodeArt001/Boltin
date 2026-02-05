// import React from "react";
import viewIconImage from "../../assets/images/view.png";

const Dashboardbutton = ({
  text = "Log out",
  buttonClassName = "",
  onClick,
  viewIcon = true,
  viewIconClassName = "",
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex px-16 py-2 bg-[#1F7A5A] text-white text-center rounded-lg gap-4 ${buttonClassName}`}
      >
        {text}
        {viewIcon && (
          <img
            src={viewIconImage}
            alt="view icon"
            className={`inline-block  ${viewIconClassName}`}
          />
        )}
      </button>
    </div>
  );
};

export default Dashboardbutton;
