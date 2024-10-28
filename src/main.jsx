import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss";
import "./assets/fonts/ibrand/stylesheet.css";
import "./assets/fonts/urbanist/stylesheet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);