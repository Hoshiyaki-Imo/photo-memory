import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App"
import Home from "./pages/Home"
import CameraPage from "./pages/CameraPage"
// import PhotoDetail from "./pages/PhotoDetail"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="camera" element={<CameraPage />} />
            {/* <Route path="photo/:id" element={<PhotoDetail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)