import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieContextProvider from "./contexts/MovieContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
