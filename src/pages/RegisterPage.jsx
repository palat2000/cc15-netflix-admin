import { useNavigate } from "react-router-dom";
import NetflixLogo from "../components/NetflixLogo";
import RegisterForm from "../components/auth/register/RegisterForm";

function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white rounded-md px-10 py-6 flex flex-col gap-4">
        <NetflixLogo className="w-20" />
        <RegisterForm />
        <span
          onClick={() => navigate("/login")}
          className="text-gray-400 hover:underline cursor-pointer"
        >
          Sign in
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
