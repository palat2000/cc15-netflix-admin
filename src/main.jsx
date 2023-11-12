import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieContextProvider from "./contexts/MovieContextProvider.jsx";
import AuthContextProvider from "./contexts/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </AuthContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
