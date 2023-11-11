import { AdminContext } from "../contexts/AdminContext";
import { useContext } from "react";

export function useAdmin() {
  return useContext(AdminContext);
}
