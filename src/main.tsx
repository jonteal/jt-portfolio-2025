import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppLayout } from "./components/layout/AppLayout.tsx";
import { PageRouter } from "./routes/PageRouter.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppLayout children={PageRouter()} />
    </BrowserRouter>
  </StrictMode>
);
