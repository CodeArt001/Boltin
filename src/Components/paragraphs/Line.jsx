const Line = ({ lineClassName = "bg-black dark:bg-white" }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-full  ">
        <div
          className={`absolute w-full h-0.5  opacity-70 ${lineClassName}`}
        ></div>
      </div>
    </div>
  );
};

export default Line;
