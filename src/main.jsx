import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BirthdayExperience from "./BirthdayExperience.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BirthdayExperience />
  </StrictMode>
);
