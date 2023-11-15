// import { useNavigate } from "react-router-dom";
import NetflixLogo from "../components/NetflixLogo";
import { useAdmin } from "../hooks/use-admin";

function Header() {
  // const navigate = useNavigate();
  const { logout } = useAdmin();
  return (
    <div className="bg-black flex py-1">
      <div className="flex justify-center w-64">
        <NetflixLogo className="w-24" />
      </div>
      <div className="flex-1 flex justify-end items-center px-6">
        <button
          // onClick={() => navigate("/login")}
          onClick={logout}
          className="text-white py-2 px-4 rounded-md hover:bg-primary"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
