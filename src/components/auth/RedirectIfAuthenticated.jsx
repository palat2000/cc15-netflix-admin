import { Navigate } from "react-router-dom";
import { useAdmin } from "../../hooks/use-admin";

export default function Authenticated({ children }) {
  const { authAdmin } = useAdmin();
  console.log(authAdmin);
  if (authAdmin) {
    return <Navigate to="/" />;
  }
  return children;
}
