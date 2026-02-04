import { useNavigate } from "react-router-dom";

const Login = ({ loginClassName = "border-black " }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/userr");
  };
  return (
    <div
      onClick={handleLogin}
      className={`lg:px-4 px-3 py-1.5 cursor-pointer rounded-lg border font-inter  ${loginClassName} `}
    >
      <button>Login</button>
    </div>
  );
};

export default Login;
