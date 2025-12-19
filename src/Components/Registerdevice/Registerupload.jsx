import React from "react";
import Upload from "./Upload";

const Registerupload = () => {
  return (
    <div className="text-white text-center w-full">
      <h1 className="text-2xl">Verification & Ownership Proof</h1>
      <p>Product Images Upload</p>
      <p>Min. of 1 Recommended: 3-5 images</p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center ">
        <Upload uploadwidth="w-full" />
        <Upload uploadwidth="w-full" />
        <Upload text="Upload IMEI,image" uploadwidth="w-full" />
        <Upload text="Upload Receipt " uploadwidth="w-full" />
      </div>
    </div>
  );
};

export default Registerupload;
