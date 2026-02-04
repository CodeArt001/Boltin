// import add from "../../assets/images/people.png";
import { TbUserShare } from "react-icons/tb";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlinePersonAdd } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import arrow from "../../assets/images/Arrow 1.png";

const Workscard = () => {
  const steps = [
    {
      id: 1,
      icon: <MdOutlinePersonAdd className="text-3xl" />,
      title: "Register your gadget",
      description: "Add IMEI, images, receipt, digital signature.",
    },
    {
      id: 2,
      icon: <IoCheckmarkCircleSharp className="text-3xl" />,
      title: "Verify & secure",
      description:
        "Boltin generates a digital ownership identity + invisible barcode.",
    },
    {
      id: 3,
      icon: <GrUserSettings className="text-3xl" />,
      title: "Track and manage",
      description: "Dashboard shows status, connections, and logs.",
    },
    {
      id: 4,
      icon: <TbUserShare className="text-3xl" />,
      title: "Recover when lost or stolen",
      description: "Community finders, police report upload, location signals.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
      </div>

      <div className=" rounded-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 relative justify-center items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="relative h-full w-full">
              {/* Arrow between cards - only on desktop, not after last card */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-22 -right-20 text-gray-400 text-3xl z-10">
                  <img src={arrow} alt="" />
                </div>
              )}

              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-md rounded-lg py-6 px-4 h-full">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 text-2xl">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workscard;
