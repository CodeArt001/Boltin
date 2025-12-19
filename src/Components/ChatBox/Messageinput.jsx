import { useState } from "react";
import pluss from "../../assets/images/plus.png";
import sendpointer from "../../assets/images/send.png";
const Messageinput = ({ onSendMessage, isConnected }) => {
  const [input, setInput] = useState("");
  const handleSend = (e) => {
    e.preventDefault(); // Prevents page reload if wrapped in a form

    // Check if there is text and if we are connected
    if (input.trim() && isConnected) {
      onSendMessage(input.trim()); // Call the parent's function
      setInput(""); // Clear the input field after sending
    }
  };
  return (
    <form onSubmit={handleSend} className="w-full  mx-auto px-4 py-3">
      <div className="  items-center ">
        <div className="relative flex w-full items-center">
          <div className="absolute left-4 flex items-center justify-center">
            <img
              src={pluss}
              alt="upload-image"
              className="w-6 h-6 object-contain cursor-pointer "
            />
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={isConnected ? "Type a message" : "Connecting..."}
            disabled={!isConnected}
            className="placeholder:text-white border border-white bg-black w-full py-4 rounded-lg pl-14 pr-14  text-white
          "
          />

          <button
            type="submit"
            disabled={!isConnected || !input.trim()}
            className="absolute right-4 flex items-center justify-center z-10 "
          >
            <img
              src={sendpointer}
              alt="send-pointer"
              className="w-5 h-5 md:w-6 md:h-6 object-contain   "
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Messageinput;
