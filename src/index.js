import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./components/app/app";

//import { Header, Input, Button, WhoAmI, All } from "./test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
