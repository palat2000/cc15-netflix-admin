import { useNavigate } from "react-router-dom";
import NetflixLogo from "../components/NetflixLogo";
import LoginForm from "../components/auth/login/LoginForm";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-black rounded-md px-10 py-6 flex flex-col gap-4">
        <NetflixLogo className="w-20" />
        <LoginForm />
        <span
          onClick={() => navigate("/register")}
          className="text-gray-400 hover:underline cursor-pointer"
        >
          Sign up
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
