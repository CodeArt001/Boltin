import { useRef, useState } from "react";
import paull from "../../assets/images/paul.png";
import chatBox from "../../assets/images/chat.png";
import { useNavigate } from "react-router-dom";

const Profilechanges = () => {
  const [profileImage, setProfileImage] = useState(paull);
  const navigate = useNavigate();
  const handleConfirmClick = () => {
    navigate("/profile-info/edit");
  };

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  return (
    <div className=" ">
      <div className="flex w-full sm:w-full justify-center text-white ">
        <div className="flex justify-between items-center  relative">
          <div></div>
          <div className="flex flex-col items-center text-white  ">
            <div className="relative">
              <img src={profileImage} alt="" />
              <button
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-0 right-0 flex items-center gap-2 mt-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>Edit Info</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <button
              // onClick={handleEditClick}
              className="flex items-center gap-2 mt-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>Edit Info</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <div className="text-white flex flex-col gap-3 ">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="">User ID</label>
                <input
                  type="text"
                  placeholder="enter ID"
                  className="placeholder:text-white py-3 rounded-lg border border-white lg:w-[25rem] w-[23rem] md:w-[45rem]  pl-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  placeholder="paul@gmail.com"
                  className="placeholder:text-white py-3 rounded-lg border border-white pl-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  placeholder="0802-222-222"
                  className="placeholder:text-white py-3 rounded-lg border border-white pl-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Joined</label>
                <input
                  type="text"
                  placeholder="22-04-25"
                  className="placeholder:text-white py-3 rounded-lg border border-white pl-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  placeholder=""
                  className="placeholder:text-white py-3 rounded-lg border border-white pl-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Portfolio</label>
                <input
                  type="text"
                  placeholder=""
                  className="placeholder:text-white py-3 rounded-lg border border-white pl-3"
                />
              </div>
            </div>
            <button
              onClick={handleConfirmClick}
              className="bg-[#6C5CE7] hover:bg-[#6C5CE7] text-white px-14 py-2 rounded  mt-3"
            >
              Comfirm
            </button>
          </div>
          <div className="absolute top-[25rem] -right-[25rem] flex flex-col items-center ">
            <img src={chatBox} alt="chat" />
            <p className="text-white">chatBox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilechanges;
