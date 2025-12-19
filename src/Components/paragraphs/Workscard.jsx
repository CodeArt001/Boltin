import add from "../../assets/images/people.png";
import verify from "../../assets/images/Vector (1).png";
import track from "../../assets/images/settings.png";
import recover from "../../assets/images/share.png";

const Workscard = () => {
  return (
    <div>
      <div className="relative flex  items-center justify-center w-full  ">
        <div className="absolute top-1/2 w-full h-0.5 bg-white opacity-70 -translate-y-1/2 hidden lg:block"></div>

        <div className="relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 max-w-7xl mx-auto">
          <div className="border bg-white rounded-lg items-center flex flex-col px-4 py-6  text-center">
            <img src={add} alt="" />
            <p className="font-bold py-3 text-2xl ">Register your gadget</p>
            <p className="">Add IMEI, images, receipt, digital signature.</p>
          </div>
          <div className="border bg-white rounded-lg flex flex-col items-center px-4 py-3 text-center">
            <img src={verify} alt="" />
            <p className="font-bold  text-2xl ">Verify & secure</p>
            <p className=" text-lg">
              Boltin generates a digital ownership identity + invisible barcode.
            </p>
          </div>
          <div className="border bg-white rounded-lg items-center flex flex-col  py-4  text-center">
            <img src={track} alt="" />
            <p className="font-bold py-3 text-2xl ">Track and manage </p>
            <p className="text-lg">
              Dashboard shows status, connections, and logs.
            </p>
          </div>
          <div className="border bg-white rounded-lg items-center flex flex-col px-4 py-2 text-center ">
            <img src={recover} alt="" />
            <p className="font-bold py-3 text-2xl ">
              Recover when lost or stolen
            </p>
            <p className="">
              Community finders, police report upload, location signals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workscard;
