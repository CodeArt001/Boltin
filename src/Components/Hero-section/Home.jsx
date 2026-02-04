import Featurecard from "../paragraphs/Featurecard";
import Workscard from "../paragraphs/Workscard";
import { useNavigate } from "react-router-dom";
import Homesection from "./Homesection";
import Faqq from "../paragraphs/Faqq";
import Footer from "../paragraphs/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/userr");
  };

  return (
    <div className="bg-white dark:bg-black  dark:text-white min-h-screen lg:px-20 px-3 lg:mt-0 mt-4 lg:pt-14 md:pt-8 pt-13">
      <div className="text-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold xl:mt-20 lg:mt-20 md:mt-10 mt-5 ">
            Keep Every Photography Device Accounted For
          </h1>
        </div>

        <p className="mt-3">
          Register, track, and protect your cameras, lenses, and equipment from
          one secure dashboard.
        </p>
        <div className="py-6">
          <button
            onClick={handleRegister}
            className="bg-[#1F7A5A] rounded-lg text-white px-5 py-2"
          >
            Get Started
          </button>
        </div>
      </div>
      <div>
        <Homesection />
      </div>
      <div id="features">
        <Featurecard />
      </div>
      <div id="how-it-works">
        <Workscard />
      </div>
      <div id="faqs">
        <Faqq />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
