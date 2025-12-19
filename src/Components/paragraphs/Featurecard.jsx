import React from "react";
import verify from "../../assets/images/Vector (1).png";
import arrow from "../../assets/images/Vector (2).png";
import helth from "../../assets/images/health.png";

const Featurecard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center place-self-center justify-center items-center gap-10 ">
        <div className="border bg-white rounded-lg items-center flex flex-col px-4 py-6">
          <img src={verify} alt="" />
          <p className="font-bold py-3 text-2xl ">
            Register & Verify Ownership
          </p>
          <p className="">Upload receipts, IMEI, MAC, secure digital proof.</p>
        </div>
        <div className="border bg-white rounded-lg flex flex-col items-center px-4 py-3 ">
          <img src={helth} alt="" />
          <p className="font-bold  text-2xl ">
            Find Lost or Stolen Devices Fast
          </p>
          <p className="">
            Bluetooth, Wi-Fi, mast signals, and community search.
          </p>
        </div>
        <div className="border bg-white rounded-lg items-center flex flex-col px-4 py-6 ">
          <img src={arrow} alt="" />
          <p className="font-bold py-3 text-2xl ">Transfer Ownership Safely</p>
          <p className="">
            A trusted way to sell or pass gadgets to new owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featurecard;
