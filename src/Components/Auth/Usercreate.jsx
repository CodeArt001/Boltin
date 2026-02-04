import { User, Mail, Phone, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Usercreate = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/userr");
  };
  return (
    <div className="min-h-screen h-[80%] bg-white dark:bg-black flex items-center justify-center shadow shadow-black/30 ">
      <div className="w-full   rounded-2xl p-8">
        <h1 className=" text-3xl font-semibold text-center font-space mt-6">
          Create Account
        </h1>

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                // value={formData.fullName}
                // onChange={handleChange}
                placeholder="enter full name"
                className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                placeholder="enter email"
                className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
                placeholder="enter phone number"
                className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                placeholder="enter password (must be 8 characters long)"
                className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                // value={formData.confirmPassword}
                // onChange={handleChange}
                placeholder="enter password (must be 8 characters long)"
                className="w-full bg-transparent border border-gray-600 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2">
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

          {/* Submit Button */}
          <button
            onClick={handleCreate}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition mt-6"
          >
            Create Account
          </button>

          {/* Already have account */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usercreate;
