import React from "react";

const Registerinfo = () => {
  return (
    <div className="flex flex-col mt-6 w-full">
      <p className="text-black dark:text-white text-4xl">Device Information</p>
      <div className="flex flex-col py-2">
        <label htmlFor="" className="text-black dark:text-white">
          Device Name
        </label>
        <input
          type="text"
          placeholder="enter device name"
          className="placeholder:text-black dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
      </div>
      <label htmlFor="" className="text-black dark:text-white border-black">
        Category
      </label>
      <select
        name="select category"
        id=""
        className="text-black dark:text-white  border border-black dark:border-white rounded-2xl px-3 py-2 bg-white dark:bg-black mt-2"
      >
        <option
          value=""
          className="text-black dark:text-white border border-white px-3 py-2 rounded-2xl"
        >
          Camera
        </option>
        <option value="">Lens</option>
        <option value="">Laptop</option>
        <option value="">Mobile Phone</option>
        <option value="">Tablet</option>
        <option value="">Drone</option>
        <option value="">Hard Drive</option>
        <option value="">Other</option>
      </select>
      <div className="flex flex-col py-2">
        <label htmlFor="" className="text-black dark:text-white">
          Brand
        </label>
        <input
          type="text"
          placeholder="enter brand"
          className="placeholder:text-black placeholder:dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="" className="text-black dark:text-white">
          Model
        </label>
        <input
          type="text"
          placeholder="enter model"
          className="placeholder:text-black dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="" className="text-black dark:text-white">
          Serial No
        </label>
        <input
          type="text"
          placeholder="enter serial no"
          className="placeholder:text-black dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="" className="text-black dark:text-white">
          Purchase Date
        </label>
        <input
          type="text"
          placeholder="enter"
          className="placeholder:text-black dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
      </div>
      <div className="flex flex-col gap-2 py-3">
        <label htmlFor="" className="text-black dark:text-white">
          IMEI
        </label>
        <input
          type="text"
          placeholder="0000000000000000"
          className="placeholder:text-black dark:text-white rounded-2xl px-3 py-2 border border-black dark:border-white mt-2"
        />
        <p className="text-black dark:text-white">
          if your gadget has no IMEI,leave blank
        </p>
      </div>
      <label htmlFor="" className="text-black dark:text-white">
        Mac Address
      </label>
      <input
        type="text"
        placeholder="A1:B2:C3:D4:E5:F6:"
        className="placeholder:text-white rounded-2xl px-3 py-2 border border-white mt-2"
      />
    </div>
  );
};

export default Registerinfo;
