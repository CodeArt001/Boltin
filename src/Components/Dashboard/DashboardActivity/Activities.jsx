import Activitycard from "./Activitycard";
import Actionscard from "./Actionscard";

const Activities = () => {
  return (
    <div className="xl:flex-row lg:flex-row md:flex sm:flex-col flex-col gap-4  xl:mt-2 lg:mt-2 sm:mt-0 mt-0  py-6  lg:items-start justify-center w-full ">
      <Activitycard />

      <Actionscard />
    </div>
  );
};

export default Activities;
