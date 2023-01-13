import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "./containers";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
