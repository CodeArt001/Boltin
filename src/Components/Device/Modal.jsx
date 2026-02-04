const Modal = ({ onClose, onConfirm }) => {
  return (
    <div className=" relative inset-0 bg-black bg-transparent flex items-center justify-center z-50  ">
      <div className="border border-white bg-[#18181b] border-t-gray-600  items-center  w-100 h-55 rounded-2xl px-10 flex flex-col justify-center lg:right-[28rem] lg:bottom-[20rem] md:bottom-[35rem] bottom-[38rem] absolute">
        <h1 className="w-45 text-center text-white ">
          Are you sure you want to remove this device ?
        </h1>
        <div className="flex justify-between py-6 gap-6">
          <button
            onClick={onClose}
            className="bg-gray-700 border border-red-700 px-4 py-2 text-white font-bold rounded-lg"
          >
            No, i am not
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-700  px-4 py-2 text-white font-bold rounded-lg"
          >
            Yes, i am sure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
