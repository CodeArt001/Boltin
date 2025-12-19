const Toggle = ({ isOn, onToggle, toggleClassName = "" }) => {
  return (
    <div className={`${toggleClassName} `}>
      <div
        onClick={onToggle}
        className={`relative w-5 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-purple-600" : "bg-black border border-white"
        }`}
      >
        <div
          className={`absolute top-[0.1rem] left-0.6 w-2 h-2 bg-white rounded-full transition-transform duration-300 ${
            isOn ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Toggle;
