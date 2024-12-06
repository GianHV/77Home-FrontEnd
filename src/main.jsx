import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
createRoot(document.getElementById("root")).render(
  // <StrictMode>

  // </StrictMode>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);