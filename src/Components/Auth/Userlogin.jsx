import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/dashboard");
  };
  return (
    <div className="w-full  bg-zinc-900 rounded-2xl lg:p-8 shadow-xl py-3 lg:py-40 lg-px-0 px-4 md:px-9 ">
      <h1 className="text-white lg:text-3xl text-2xl font-semibold text-center lg:mb-8 lg:py-0 py-4">
        Login to your account
      </h1>
      <form action="">
        <div className="text-white text-sm font-medium block mb-3">
          <label className="" htmlFor="">
            User ID
          </label>
          <div className="relative mt-3">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5  " />
            <input
              type="text"
              placeholder="enter user ID"
              className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3    text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>
        </div>
        <div className="text-white text-sm font-medium block mb-3 relative">
          <label className="" htmlFor="">
            Password
          </label>
          <div className="relative mt-3">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5  " />
            <input
              type="text"
              placeholder="enter password (must be 8 characters long)"
              className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3    text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>
          <p className="text-red-500 right-0 flex absolute">forget password?</p>
        </div>
        <div className="flex items-start gap-2 mt-8">
          <input
            type="checkbox"
            name="agreed"
            // checked={formData.agreed}
            // onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-gray-600 bg-transparent"
          />
          <label className="text-gray-400 text-xs">
            By creating an account, you agree to Boltlin Terms and Privacy
            Policy.
          </label>
        </div>
        <button
          onClick={handleLoginPage}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition mt-6"
        >
          Login
        </button>
        <p className="text-center text-white mt-3">
          Don `&apos;`t have an account?{" "}
        </p>
      </form>
    </div>
  );
};

export default Userlogin;
