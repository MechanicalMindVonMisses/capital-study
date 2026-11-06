import "@/lib/logger";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource-variable/archivo";
import "@fontsource-variable/newsreader";
import "@fontsource/ibm-plex-mono/400.css";
import "./index.css";
import { TRPCProvider } from "@/providers/trpc";
import { LearningProvider } from "@/providers/learning";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TRPCProvider>
        <LearningProvider>
          <App />
        </LearningProvider>
      </TRPCProvider>
    </BrowserRouter>
  </StrictMode>,
)
