import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rand = crypto.getRandomValues(new Uint8Array(16));


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
