const Devicecard = ({ title, count, barColor = "bg-blue-600" }) => {
  return (
    <div className="relative bg-white rounded-lg shadow shadow-black/30 border border-gray-200 overflow-hidden w-full min-h-[120px]">
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${barColor}`}></div>

      <div className="pl-6 pr-4 py-4 sm:py-6">
        <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-3">
          {title}
        </h3>
        <p className="text-3xl sm:text-4xl font-bold text-gray-900 text-right">
          {count}
        </p>
      </div>
    </div>
  );
};

export default Devicecard;
