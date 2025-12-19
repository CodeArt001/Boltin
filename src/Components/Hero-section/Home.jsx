import Gadget from "../Buttons/Gadget";
import system from "../../assets/images/computer.png";
import Protect from "../paragraphs/Protect";
import Featurecard from "../paragraphs/Featurecard";
import Workscard from "../paragraphs/Workscard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/userr");
  };

  return (
    <div className="bg-black min-h-screen lg:px-20 px-5 lg:mt-0 mt-4">
      <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col items-center justify-between   ">
        <div className="flex-col gap-6 justify-center items-center text-white lg:text-6xl text-5xl lg:w-[50%] w-full leading-wider ">
          <p className=" font-bold lg:py-3">
            Secure Your <span className="text-[#29FF85]">Gadgets.</span> Protect
            Your Creative Tools
          </p>
          <span className="lg:text-3xl text-[1.2rem] lg:font-light ">
            <p>
              Register, track, and recover your devices,built for photographers
              and creatives who can’t afford to lose their gear.
            </p>
          </span>
          <div
            onClick={handleRegister}
            className="text-2xl lg:mt-3 mt-3 flex justify-center cursor-pointer"
          >
            <Gadget />
          </div>
        </div>
        <div>
          <img src={system} alt="computer" />
        </div>
      </div>
      <div className="lg:mt-0 md:mt-4 mt-0">
        <Protect />
      </div>
      <div className="py-14">
        <Featurecard />
      </div>
      <div>
        <Protect text="How It Works" />
      </div>
      <div className="py-10 ">
        <Workscard />
      </div>
    </div>
  );
};

export default Home;
