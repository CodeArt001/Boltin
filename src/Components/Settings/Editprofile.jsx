import { useRef, useState } from "react";
import paull from "../../assets/images/paul.png";
import chatBox from "../../assets/images/chat.png";

const Editprofile = () => {
  const [profileImage, setProfileImage] = useState(paull);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };

  return (
    <div className="flex w-full sm:w-full justify-center">
      <div className="flex justify-between items-center bg-white dark:bg-black text-black dark:text-white h-full relative">
        <div></div>
        <div className="flex flex-col items-center ">
          <div className="relative">
            <img src={profileImage} alt="" />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 flex items-center gap-2 mt-2 text-black dark:text-white hover:text-white transition-colors"
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
          <div className="text-black dark:text-white flex flex-col gap-3 mt-5">
            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">User ID: Pau</label> */}
              <input
                type="text"
                placeholder="enter ID: Paul"
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white lg:w-100 w-92 md:w-180 pl-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">Email address</label> */}
              <input
                type="text"
                placeholder="Email address: paul@gmail.com"
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white pl-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">Phone Number</label> */}
              <input
                type="text"
                placeholder="phone number: 0802-222-222"
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white pl-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">Phone Number</label> */}
              <input
                type="text"
                placeholder="primary address: 123 street, city, country"
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white pl-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">Phone Number</label> */}
              <input
                type="text"
                placeholder="secondary address: "
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white pl-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* <label htmlFor="">Portfolio</label> */}
              <input
                type="text"
                placeholder="Portfolio link"
                className="placeholder:text-black dark:placeholder:text-white py-3 rounded-lg  shadow shadow-black/30 dark:border-white pl-3"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-100 -right-100 flex flex-col items-center ">
          <img src={chatBox} alt="chat" />
          <p className="text-white">chatBox</p>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
