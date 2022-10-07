import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Get root div from index.html and make it a root of the application, render App.js
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
