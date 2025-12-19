import React from "react";
import Dashboardbar from "../Dashboard/Dashboardbar";

const Transferhistory = () => {
  return (
    <div className="bg-black  min-h-screen w-full  lg:pl-6 relative">
      <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2">
        <Dashboardbar
          text="Transfer History"
          textClassName="md:text-[1.8rem]"
        />
      </div>
      <div className="mt-4 md:mt-18 lg:mt-4 lg:px-0 md:px-5 lg:pr-14">
        <div className="hidden md:block overflow-x-auto">
          <table className="border border-collapse text-white w-full h-60  ">
            <tr className="border border-white ">
              <th className="border border-white px-4 ">S/N</th>
              <th className="border border-white px-4">Device</th>
              <th className="border border-white px-4">Status</th>
              <th className="border border-white px-4">From</th>
              <th className="border border-white px-4">To</th>
              <th className="border border-white px-4">Date</th>
            </tr>
            <tr className="border border-white text-center">
              <td className="border border-white px-4">01</td>
              <td className="border border-white px-4">Sony 224</td>
              <td className="border border-white px-4 text-yellow-400">
                Pending
              </td>
              <td className="border border-white px-4">Paul</td>
              <td className="border border-white px-4">Noah</td>
              <td className="border border-white px-4">31/07/2024</td>
            </tr>
            <tr className="border border-white text-center">
              <td className="border border-white px-4">01</td>
              <td className="border border-white px-4">Sony 224</td>
              <td className="border border-white px-4 text-red-600">
                {" "}
                Rejected
              </td>
              <td className="border border-white px-4">Paul</td>
              <td className="border border-white px-4">Noah</td>
              <td className="border border-white px-4">31/07/2024</td>
            </tr>
            <tr className="border border-white text-center">
              <td className="border border-white px-4">01</td>
              <td className="border border-white px-4">Sony 224</td>
              <td className="border border-white px-4 text-yellow-400">
                Pending
              </td>
              <td className="border border-white px-4">Paul</td>
              <td className="border border-white px-4">Noah</td>
              <td className="border border-white px-4">31/07/2024</td>
            </tr>
            <tr className="border border-white text-center">
              <td className="border border-white px-4">01</td>
              <td className="border border-white px-4">Sony 224</td>
              <td className="border border-white px-4 text-green-600">
                Accepted
              </td>
              <td className="border border-white px-4">Paul</td>
              <td className="border border-white px-4">Noah</td>
              <td className="border border-white px-4">31/07/2024</td>
            </tr>
          </table>
        </div>
        <div className="md:hidden flex flex-col gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-white p-4 rounded-lg text-white bg-zinc-900"
            >
              <div className="flex justify-between border-b border-gray-700 pb-2 mb-2">
                <span className="font-bold">Device:</span>
                <span>Sony 224</span>
              </div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-400">Status:</span>
                <span className="text-yellow-400">Pending</span>
              </div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-400">From:</span>
                <span>Paul</span>
              </div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-400">To:</span>
                <span>Noah</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>S/N: 01</span>
                <span>31/07/2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transferhistory;
