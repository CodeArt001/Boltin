import paulp from "../../assets/images/paul.png";
import views from "../../assets/images/view.png";
import chatBox from "../../assets/images/chat.png";
import { useNavigate } from "react-router-dom";

const Accountname = () => {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/profile-info");
  };
  const handleChangePassword = () => {
    navigate("/profile-info", { state: { activeTab: "account-settings" } });
  };
  return (
    <div className="bg-black h-full flex flex-col justify-center items-center relative">
      <div></div>
      <div className="py-3">
        <img src={paulp} alt="" />
        <p className="text-white text-center">Paul</p>
      </div>
      <div className="flex flex-col text-white relative items-center ">
        <div
          onClick={handleEditProfile}
          className="border border-white rounded-lg  cursor-pointer w-[20rem] pl-3 py-2"
        >
          Edit profile
        </div>
        <img src={views} alt="" className="absolute right-4 top-3" />
      </div>
      <div className="flex flex-col text-white relative items-center">
        <div
          onClick={handleChangePassword}
          className="border border-white rounded-lg  cursor-pointer w-[20rem] pl-3 py-2 text-white mt-3"
        >
          Change password
        </div>
        <img src={views} alt="" className="absolute right-4 top-5" />
      </div>
      <div className="absolute -bottom-40 right-8 flex flex-col items-center ">
        <img src={chatBox} alt="chat" />
        <p className="text-white">chatBox</p>
      </div>
    </div>
  );
};

export default Accountname;
