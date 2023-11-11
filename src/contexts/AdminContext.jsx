import { useState } from "react";
import { createContext } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";
import axios from "../config/axios";

export const AdminContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authAdmin, setAuthAdmin] = useState(null || getAccessToken());
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/admin/me")
        .then((res) => {
          setAuthAdmin(res.data.admin);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credentail) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await axios.post("/admin/login", credentail);
      addAccessToken(res.data.accessToken);
      setAuthAdmin(res?.data?.admin);
    } catch (err) {
      throw err;
    }
  };

  const registerAdmin = async (registerInputObject) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log(registerInputObject);
      const res = await axios.post("/admin/register", registerInputObject);
      addAccessToken(res.data.accessToken);
      setAuthAdmin(res?.data?.admin);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    removeAccessToken(), setAuthAdmin(null);
  };

  return (
    <AdminContext.Provider
      value={{
        authAdmin,
        initialLoading,
        login,
        registerAdmin,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
