import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSetup from "./pages/Test/Test";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import Pageerror from "./pages/PageError";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccountPage />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />

        <Route path="*" element={<Pageerror />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
