import paull from "../../assets/images/paul.png";
import chatBox from "../../assets/images/chat.png";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import Passwordsuccsseful from "./Passwordsuccsseful";

const Accountsecurity = () => {
  const [enterPassword, SetEnterPasswprd] = useState(false);
  const [comfirmPassword, SetComfirmPassword] = useState(false);
  const [passwordSuccessfull, SetPasswordSuccessful] = useState(false);
  const handleEnter = () => {
    SetEnterPasswprd(!enterPassword);
  };
  const handleComfirm = () => {
    SetComfirmPassword(true);
  };
  const handleSuccessful = () => {
    SetPasswordSuccessful(!passwordSuccessfull);
  };

  return (
    <div className="flex justify-center">
      <div className="relative flex  justify-between items-center text-black dark:text-white">
        <div></div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col py-3 items-center justify-center">
            <img src={paull} alt="" />
            <p>Paul</p>
          </div>
          <div className="flex flex-col text-black dark:text-white relative items-center">
            <div className="  border border-black dark:border-white rounded-lg py-3 lg:w-100 w-92 md:w-180  pl-3">
              Change Password
            </div>

            <div
              onClick={() => handleEnter()}
              className="absolute right-4 top-5 cursor-pointer text-black dark:text-white"
            >
              {enterPassword ? (
                <SlArrowUp className="text-black dark:text-white" />
              ) : (
                <SlArrowDown />
              )}
            </div>

            {enterPassword && (
              <div className="py-5 flex flex-col justify-center items-center ">
                <div className="text-black border border-black dark:text-white dark:border-white py-3 pl-3 rounded-lg lg:w-100 w-92 md:w-180">
                  Enter last password
                </div>

                {!comfirmPassword && (
                  <button
                    onClick={() => handleComfirm()}
                    className="bg-[#6C5CE7] hover:bg-[#6C5CE7] text-black dark:text-white px-6 py-2 rounded  mt-2"
                  >
                    Next
                  </button>
                )}

                {comfirmPassword && (
                  <div className="flex flex-col items-center gap-2">
                    <div className=" mt-3 text-black border border-black dark:text-white dark:border-white py-3 pl-3 rounded-lg lg:w-100 w-92 md:w-180 ">
                      Comfirm new passworld
                      <div />
                    </div>
                    <button
                      onClick={handleSuccessful}
                      className="bg-[#6C5CE7] hover:bg-[#6C5CE7] text-white px-14 py-2 rounded mt-2"
                    >
                      Comfirm
                    </button>
                  </div>
                )}

                {passwordSuccessfull && (
                  <div className="absolute -top-8 flex items-center justify-center z-50">
                    <Passwordsuccsseful />
                  </div>
                )}
                <p className="text-white">Try another way</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 right-8 flex flex-col items-center ">
        <img src={chatBox} alt="chat" />
        <p className="text-white">chatBox</p>
      </div>
    </div>
  );
};

export default Accountsecurity;
