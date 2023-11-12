import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../components/auth/Authenticated";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      // <Authenticated>
      <Layout />
      // </Authenticated>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "movie", element: <MoviePage /> },
      { path: "user", element: <UserPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
